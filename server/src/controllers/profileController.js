import expressAsyncHandler from "express-async-handler";
import userProfileRepositories from "../repositories/userProfileRepositories.js";

const profileController = {
    updateProfile: expressAsyncHandler(async (req, res, next) => {
        const { user_name } = req.body
        const { userId } = req.currentUser

        //image from file
        const file = req.file
        // if (!file) throw new ERROR.BadRequestError('image  required ')
        // image upload S3 -- pending !!!!
        //
        //-----------------------------

        const updatedUser = await userProfileRepositories.updateUserUserNameById(userId, user_name)

        return res.status(200).json({ message: 'User updated successfully', updatedUser });
    }),


};

export default profileController;
