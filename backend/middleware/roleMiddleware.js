const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        try {
            // Assuming the user's role is stored in req.user after authentication
            const userRole = req.user.role;

            if (!userRole) {
                return res.status(403).json({ message: 'Access denied. No role assigned.' });
            }

            if (requiredRole !== userRole) {
                return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
            }

            next();
        } catch (error) {
            return res.status(500).json({ message: 'An error occurred while verifying role.', error });
        }
    };
};

module.exports = roleMiddleware;
