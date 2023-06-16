import expressAsyncHandler from "express-async-handler";
import amadeusServices from "../services/amadeusServices.js";

const ticketsController = {
    search: expressAsyncHandler(async (req, res, next) => {
        console.log("api dhasdjaslkj");
         const {searchKey} = req.body;
        console.log(searchKey);
        // Get data from amadeus
        const data = await amadeusServices.flightOffersSearch(searchKey);
        const count = data.length;

        const response = {
            meta: {
                count: count
            },
            data: data
        };



        return res.status(200).json(response);
    }),
};

export default ticketsController;
