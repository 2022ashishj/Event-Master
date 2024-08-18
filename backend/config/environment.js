require('dotenv').config();

const environment = {
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/event-management',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    port: process.env.PORT || 5000,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
    emailServiceApiKey: process.env.EMAIL_SERVICE_API_KEY || 'your_email_service_api_key',
    notificationsEnabled: process.env.NOTIFICATIONS_ENABLED || true,
    adminEmail: process.env.ADMIN_EMAIL || 'admin@example.com'
};

module.exports = environment;
