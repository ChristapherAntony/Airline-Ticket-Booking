import jwt from 'jsonwebtoken'
import config from '../config/env.config.js';
import { OAuth2Client } from "google-auth-library";

const authServices = {

    generateToken: async (payload) => {
        const token = jwt.sign(payload, config.jwtSecret, {
            expiresIn: '1h',
        });
        return token
    },
    verifyToken: async (token) => {
        return jwt.verify(token, config.jwtSecret)
    },

    attachTokenToCookie: (cookieName, Token, res) => {
        res.cookie(cookieName, Token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            signed: false,
            maxAge: 24 * 60 * 60 * 1000
        });
    },

    verifyGoogleToken: async (token) => {

        const client = new OAuth2Client(config.googleClintID, config.googleClintSecret);

        // Verify the Google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config.googleClintID,
        });

        // return the payload
        return ticket.getPayload() 
    }



};

export default authServices;



