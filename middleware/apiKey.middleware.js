// apiKey.middleware.js

const ApiKey = require('../models/apiKey.model');

const apiKeyMiddleware = async (req, res, next) => {
    // Exclude API key check for /api/api-keys and /api/login endpoints
    if ((req.path === '/api/api-keys' && req.method === 'POST') || 
        (req.path === '/api/login' && req.method === 'POST')) {
        return next();
    }

    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({ error: 'API key is required' });
    }

    try {
        const validApiKey = await ApiKey.findOne({ key: apiKey });
        if (!validApiKey) {
            return res.status(401).json({ error: 'Invalid API key' });
        }
        next();
    } catch (error) {
        console.error('Error validating API key:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = apiKeyMiddleware;

