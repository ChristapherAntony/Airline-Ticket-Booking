import authController from "../controllers/authController.js";
import { validateEmail, validateOTP } from "../middlewares/validate.js";

const authRouter = (router) => {

  router.route('/google').post(authController.googleAuth);
  // Register email route with the validateEmail middleware
  router.route('/email-register').post(validateEmail, authController.emailRegister);

  router.route('/email-verify').post(validateOTP, authController.emailVerifyAndLogin);

  router.route('/logout').post(authController.logOut);


  return router;
}

export default authRouter;
