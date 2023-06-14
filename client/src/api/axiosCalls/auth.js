
import axiosApi from "../axios"
import { EMAIL_VERIFY, GOOGLE_AUTH, LOG_OUT, PROFILE_UPDATE, REGISTER_WITH_EMAIL } from "../constants"


const asyncHandler = async (request) => {
    try {
        return await request();
    } catch (error) {
        return error;
    }
};


export const registerWithEmail = (email) =>
    asyncHandler(() => axiosApi.post(REGISTER_WITH_EMAIL, { email }));


export const emailVerify = (email, otp) =>
    asyncHandler(() => axiosApi.post(EMAIL_VERIFY, { email, otp }));


export const profileUpdate = (formData) =>
    asyncHandler(() => axiosApi.patch(PROFILE_UPDATE, formData));


export const logOut = () =>
    asyncHandler(() => axiosApi.post(LOG_OUT));


export const googleAuth = (googleToken) =>
    asyncHandler(() => axiosApi.post(GOOGLE_AUTH, { googleToken }));

