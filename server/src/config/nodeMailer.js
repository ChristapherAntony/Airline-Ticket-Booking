import nodemailer from 'nodemailer';
import config from './env.config.js';

// create transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'careerconnect012@gmail.com',
        pass: config.nodeMailerGmailPassword,
    },
});

export default transporter;