const ApiKey = require('../../../models/apiKey.model.js');
const User = require('../../../models/user.model.js'); // Assuming you have a User model

const apiKeyMiddleware = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({ error: 'API key is required' });
    }

    try {
        const apiKeyDoc = await ApiKey.findOne({ key: apiKey });
        if (!apiKeyDoc) {
            return res.status(403).json({ error: 'Invalid API key' });
        }

        // Assuming apiKeyDoc has a hospitalId field
        const user = await User.findOne({ hospitalId: apiKeyDoc.hospitalId });
        if (!user) {
            return res.status(403).json({ error: 'User not found' });
        }

        // Attach user information to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error('Error authenticating API key:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = apiKeyMiddleware;
