import { v4 as uuidv4 } from 'uuid';

export const generateOTP = () => {
  const uuid = uuidv4();
  const digitsOnly = uuid.replace(/\D/g, '');
  const otp = digitsOnly.substr(0, 6);
  return otp;
};


export const attachTokenToCookie = (cookieName, Token, res) => {
  
  res.cookie(cookieName, Token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: false,
    maxAge: 24 * 60 * 60 * 1000
  });
};




