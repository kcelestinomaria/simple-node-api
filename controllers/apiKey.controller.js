const uuid = require('uuid');
const ApiKey = require('../models/ApiKey');

// Create a new API key for a hospital
const createApiKey = async (hospitalId) => {
    try {
        const apiKey = uuid.v4(); // Generate a UUID as the API key
        await ApiKey.create({ key: apiKey, hospitalId });
        return apiKey;
    } catch (error) {
        console.error('Error creating API key:', error);
        return null;
    }
};

// Helper function to generate API key
const generateApiKey = () => {
    return uuid.v4(); // Generate a UUID as the API key
};

module.exports = {
    createApiKey
};
