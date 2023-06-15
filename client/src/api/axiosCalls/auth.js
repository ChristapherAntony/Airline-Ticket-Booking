import axiosApi from "../axios";
import { EMAIL_VERIFY, GOOGLE_AUTH, LOG_OUT, PROFILE_UPDATE, REGISTER_WITH_EMAIL } from "../constants";

export const registerWithEmail = (email) =>
    axiosApi.post(REGISTER_WITH_EMAIL, { email });

export const emailVerify = (email, otp) =>
    axiosApi.post(EMAIL_VERIFY, { email, otp });


export const profileUpdate = (formData) =>
    axiosApi.patch(PROFILE_UPDATE, formData);

export const logOut = () =>
    axiosApi.post(LOG_OUT);

export const googleAuth = (googleToken) =>
    axiosApi.post(GOOGLE_AUTH, { googleToken });

