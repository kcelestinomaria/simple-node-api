// controllers/userController.js

const User = require('../models/user.model.js');

// Authenticate user based on username and password
const authenticateUser = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        return user;
    } catch (error) {
        console.error('Error authenticating user:', error);
        return null;
    }
};

module.exports = {
    authenticateUser
};
