import User from "../models/user.js";


const userProfileRepositories = {
    updateUserUserNameById: async (userId, userName) => {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { user_name: userName },
            { new: true }
        );
        return updatedUser;
    },

};

export default userProfileRepositories;
