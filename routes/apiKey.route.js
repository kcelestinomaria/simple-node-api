const express = require('express');
const router = express.Router();
const apiKeyController = require('../../controllers/apiKeyController');

// Route to create a new API key
router.post('/api-keys', async (req, res) => {
    const { hospitalId } = req.body;
    const apiKey = await apiKeyController.createApiKey(hospitalId);
    if (apiKey) {
        res.status(201).json({ apiKey });
    } else {
        res.status(500).json({ error: 'Failed to generate API key' });
    }
});

module.exports = router;
