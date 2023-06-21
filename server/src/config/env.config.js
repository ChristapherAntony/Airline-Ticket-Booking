import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 9000,
    mongoURI: process.env.MONGODB_URI,
    nodeMailerGmailPassword: process.env.NODE_MAILER_GMAIL_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnvironment: process.env.NODE_ENV,
    authRoles: {
        admin: "admin",
        user: "user",
    },
    googleClintID: process.env.GOOGLEOAUTH_CLIENT_ID,
    googleClintSecret: process.env.GOOGLEOAUTH_CLIENT_SECRET,
    amadeusApiKey: process.env.AMADEUS_API_KEY,
    amadeusApiSecret: process.env.AMADEUS_API_SECRET,
    allowedOrigins: process.env.ALLOWED_ORIGINS.split(',')


};

export default config;
