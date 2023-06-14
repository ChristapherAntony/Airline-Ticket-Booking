import authController from "../controllers/authController.js";
import { validateEmail,validateOTP } from "../middlewares/validate.js";

const authRouter = (router) => {

  // Register email route with the validateEmail middleware
  router.route('/email-register').post(validateEmail, authController.emailRegister);

  router.route('/email-verify').post(validateOTP, authController.emailVerifyAndLogin);
  

  return router;
}

export default authRouter;
