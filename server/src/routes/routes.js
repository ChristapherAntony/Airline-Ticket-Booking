import authRouter from "./authRoutes.js";
import profileRoutes from "./profileRoutes.js";

export const routes = (app, router) => {

  app.use('/api/v1/auth', authRouter(router));
  app.use('/api/v1/profile', profileRoutes(router));
    


};

export default routes