// authorizeRole.middleware.js

const authorizeRole = (role) => {
    return (req, res, next) => {
        // Check if user is authenticated and has the required role
        if (req.user && req.user.role === role) {
            next(); // User has required role, proceed to next middleware/route handler
        } else {
            res.status(403).json({ message: 'Unauthorized' }); // User does not have required role
        }
    };
};

module.exports = authorizeRole;
