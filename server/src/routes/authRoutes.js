

const authRouter = (router) => {

    //log hai
    router.route('/hi').get((req, res) => {
        res.send('hai');
    });

    


    return router;
}

export default authRouter;
