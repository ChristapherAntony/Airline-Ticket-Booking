import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        user_name: {
            type: String,
            default: "User"
        },
        profile_image: {
            type: String,
            default:"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
        },
        phone_number: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        is_email_verified: {
            type: Boolean,
            required: true,
            default: false
        },
        is_profile_updated: {
            type: Boolean,
            required: true,
            default: false
        }
    }
);

UserSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

const User = mongoose.model('User', UserSchema);
export default User;
