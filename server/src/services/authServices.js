import jwt from 'jsonwebtoken'
import config from '../config/env.config.js';

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
    }



};

export default authServices;



