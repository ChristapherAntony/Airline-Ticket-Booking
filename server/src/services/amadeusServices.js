import Amadeus from 'amadeus';
import config from '../config/env.config.js';

const amadeus = new Amadeus({
    clientId: config.amadeusApiKey,
    clientSecret: config.amadeusApiSecret
});

const amadeusServices = {
    flightOffersSearch: async (payload) => {
        
        const { 
            originLocationCode, 
            destinationLocationCode, 
            departureDate, 
            returnDate, 
            adults, 
            max, 
            includedAirlineCodes, 
            currencyCode, 
            nonStop, 
            maxPrice, 
            maxNumberOfConnections, 
            travelClass 
        } = payload;

        try {
            const response = await amadeus.shopping.flightOffersSearch.get({
                originLocationCode,
                destinationLocationCode,
                departureDate,
                // returnDate:null,
                adults:payload?.adults || 1,
                max:15,
                includedAirlineCodes,
                currencyCode:"INR",
                nonStop,
                maxPrice:payload?.maxPrice,
                maxNumberOfConnections:payload?.maxNumberOfConnections,
                travelClass:payload?.travelClass ,
            });

         
            return response.data;
        } catch (error) {
            console.log(error, "error");
            throw error.code;
        }
    },
};

export default amadeusServices;
