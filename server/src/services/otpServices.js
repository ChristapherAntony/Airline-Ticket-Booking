import transporter from "../config/nodeMailer.js";
import { generateOTP } from "../utils/authUtilities.js";
import bcrypt from 'bcrypt'


const otpServices = {

  sendOTP: async (email) => {
    //generate otp
    const otpGenerated = generateOTP()


    //send using node mailer
    const mailOptions = {
      from: 'christapher316@gmail.com',
      to: email,
      subject: 'OTP for email verification',
      // html: `<p>Your OTP is ${otpGenerated}. Please enter this OTP to verify your email address.</p>`,
      html: `

            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">AirBooking</a>
          <!--       <image h- src='https://res.cloudinary.com/dprxebwil/image/upload/v1680618176/Recruiter/11667132_20943447_brtjjh.jpg'/>  -->
              </div>
              <p style="font-size:1.1em">Hi, ${email}</p>
              <p>Use the following OTP to complete your Sign in. OTP is valid for 1 minutes</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpGenerated}</h2>
              <p style="font-size:0.9em;">Regards,<br />careerconnect</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>careerconnect</p>
                <p>1600 Amphitheatre Parkway</p>
                <p>California</p>
              </div>
            </div>
          </div>
            
            `
    };
    await transporter.sendMail(mailOptions);

    //hash otp and send back 

    const bcryptedOtp = await bcrypt.hash(otpGenerated.toString(), 10);
    return bcryptedOtp
  },

  verifyOTP: async (otp, hashedOtp) => {
    const isMatch = await bcrypt.compare(otp.toString(), hashedOtp);
    return isMatch;
  },
};

export default otpServices;
