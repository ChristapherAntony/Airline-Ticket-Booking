import OTP from "../models/otp.js";
import User from "../models/user.js";


const authRepositories = {
    findUserByEmail: async (email) => {
        return await User.findOne({ email });;
    },

    createUserByEmail: async (userEntity) => {
        const user = new User(userEntity);
        return await user.save();
    },

    createOtpDocument: async (otp, email) => {
        const otpDocs = new OTP({ email, otp })
        return await otpDocs.save()
    },
    findUOtpDocument: async (email) => {
        return await OTP.findOne({ email });;
    },
    updateUserEmailVerification: async (email) => {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { is_email_verified: true },
            { new: true }
        );
        return updatedUser;
    },
};

export default authRepositories;
