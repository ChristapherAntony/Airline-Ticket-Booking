import authRouter from "./authRoutes.js";
import profileRoutes from "./profileRoutes.js";
import ticketsRoutes from "./ticketsRoutes.js";

export const routes = (app, router) => {

  app.use('/api/v1/auth', authRouter(router));

  app.use('/api/v1/profile', profileRoutes(router));
  
  app.use('/api/v1/tickets', ticketsRoutes(router));


};

export default routes