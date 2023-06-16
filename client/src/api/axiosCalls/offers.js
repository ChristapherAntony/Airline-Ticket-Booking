import axiosApi from "../axios";
import { OFFERS } from "../constants";

export const getAllOffers = (searchKey) =>{
    console.log(searchKey,"from apicall");
    return  axiosApi.post(OFFERS, {searchKey});
}
   


