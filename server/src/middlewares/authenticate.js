import config from "../config/env.config.js";
import jwt from 'jsonwebtoken';

const authenticate = () => (req, res, next) => {
    if (!req.cookies['jwt']) {
        return next();
    }

    try {
        const payload = jwt.verify(req.cookies['jwt'], config.jwtSecret);
        req.currentUser = payload;
    } catch (error) {
        res.clearCookie('jwt')
        // Handle JWT verification error
        return res.status(401).json({ error: 'Invalid token' });
    }

    next();
};

export default authenticate;
