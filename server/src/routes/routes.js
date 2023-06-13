import authRouter from "./authRoutes.js";

export const routes = (app, router) => {

  app.use('/api/v1/auth', authRouter(router));
    


};

export default routes