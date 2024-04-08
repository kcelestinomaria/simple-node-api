
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller.js');

// User login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userController.authenticateUser(username, password);
    if (user) {
        // Authentication successful
        res.json({ user });
    } else {
        // Authentication failed
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;
