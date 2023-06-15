import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600, // expires after 1 minute (60 seconds)
    },
});

otpSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.otp;
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
    },
});

const OTP = mongoose.model('OTP', otpSchema);

export default OTP;