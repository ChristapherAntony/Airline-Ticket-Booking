import asyncHandler from 'express-async-handler';
import { ERROR } from '../utils/errors.js';
import authRepositories from '../repositories/authRepositories.js';
import otpServices from '../services/otpServices.js';
import authServices from '../services/authServices.js';
import config from '../config/env.config.js';

const authController = {

    googleAuth: asyncHandler(async (req, res, next) => {
        const { googleToken } = req.body
        if (!googleToken) {
            throw new ERROR.BadRequestError('Google auth faild! Token undefined')
        }
        //need to verify and get data form google auth token, 
        const { email, name, picture, email_verified } = await authServices.verifyGoogleToken(googleToken)
        if (!email || !name || !picture || !email_verified) {
            throw new ERROR.BadRequestError('Google auth faild! User field undefined')
        }
        //check weather if their any user with that email in db
        let existingUser = await authRepositories.findUserByEmail(email)
        //if not create user with the data from google
        if (!existingUser) {
            const userEntity = {
                user_name: name,
                email: email,
                profile_image: picture,
                is_email_verified: true

            }
            existingUser = await authRepositories.createUserByEmail(userEntity);
        }
        //if the user register with otp way and faild
        //here if the user choose google login it need ot update is_email_verified field
        if (!existingUser.is_email_verified) {
            existingUser = await authRepositories.updateUserEmailVerification(email)
        }

        //give the JWT token to the user with response and user data
        //sign jwt
        const payload = {
            userId: existingUser._id.toString(),
            email: existingUser.email,
            roles: [config.authRoles.user]
        }
        const token = await authServices.generateToken(payload)
        //attach to http only cookie 
        authServices.attachTokenToCookie('jwt', token, res)

        return res.status(200).json({ message: 'Login successful', existingUser });
    }),


    emailRegister: asyncHandler(async (req, res, next) => {
        const { email } = req.body;

        // 1. Check the database for existing email
        let existingUser = await authRepositories.findUserByEmail(email)

        //2. not registered ?  register and send otp : send  otp
        //2.1 register
        if (!existingUser) {
            const userEntity = {
                email: email
            }
            existingUser = await authRepositories.createUserByEmail(userEntity);
        }

        //3 send otp - this will create an otp and send the email address
        const otp = await otpServices.sendOTP(email)

        //4 create a temp collection and save the otp with TTL 
        const otpDocs = await authRepositories.createOtpDocument(otp, email)

        //2. return otp docs with the message of OTP send and please enter otp to continue


        return res.status(200).json({ message: 'Registration successful, please verify otp', otpDocs });
    }),


    emailVerifyAndLogin: asyncHandler(async (req, res, next) => {
        const { otp, email } = req.body;
        // 1. Check the database for existing email
        let existingUser = await authRepositories.findUserByEmail(email)
        if (!existingUser) throw new ERROR.NotFoundError("User not found ..")

        //check weather the otp decs exists or not 
        const otpDocs = await authRepositories.findUOtpDocument(email)
        if (!otpDocs) throw new ERROR.OTPExpiredError("Your entered otp is expired, try again ..")

        //verify the otp with the saved otp
        const is_verified = await otpServices.verifyOTP(otp, otpDocs.otp)
        if (!is_verified) throw new ERROR.OtpMismatchError('Wrong OTP!')

        //update user profile with email verified
        const updatedUser = await authRepositories.updateUserEmailVerification(email)

        //sign jwt
        const payload = {
            userId: existingUser._id.toString(),
            email: existingUser.email,
            roles: [config.authRoles.user]
        }
        const token = await authServices.generateToken(payload)


        //attach to http only cookie 
        authServices.attachTokenToCookie('jwt', token, res)


        //send response to update profile
        return res.status(200).json({ message: 'User verified successfully', updatedUser });
    }),


    logOut: asyncHandler(async (req, res, next) => {
        try {
            res.clearCookie('jwt')

            res.status(200).json({ message: 'logout successful' })
        } catch (error) {
            next(error)
        }
    }),

};

export default authController;
