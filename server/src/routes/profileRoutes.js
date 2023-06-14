import config from "../config/env.config.js";
import authController from "../controllers/authController.js";
import profileController from "../controllers/profileController.js";
import authorize from "../middlewares/authorize.js";
import upload from "../middlewares/multer.js";
import { validateUserName } from "../middlewares/validate.js";

const profileRoutes = (router) => {


    router.route('/').patch(
        authorize([config.authRoles.user]), //check weather the user is authorized 
        upload.single('profile_image'),     //manage file upload
        validateUserName,
        profileController.updateProfile);




    return router;
}

export default profileRoutes;
