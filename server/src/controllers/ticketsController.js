import expressAsyncHandler from "express-async-handler";
import amadeusServices from "../services/amadeusServices.js";

const ticketsController = {
    search: expressAsyncHandler(async (req, res, next) => {
        const payload = req.query;

        // Get data from amadeus
        const data = await amadeusServices.flightOffersSearch(payload);
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
