import ticketsController from "../controllers/ticketsController.js";

const ticketsRoutes = (router) => {
    
    
    //public route  search the tickets by filter
    router.route('/').post(ticketsController.search);





    return router;
}

export default ticketsRoutes;
