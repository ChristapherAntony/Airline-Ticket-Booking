import { createSlice } from '@reduxjs/toolkit'

const searchKeyReducer = createSlice({
    name: 'searchkey',
    initialState: {
        originLocationCode: null,
        destinationLocationCode: null,
        isReturn: null,
        departureDate: null,
        returnDate: null,
        adults: null,
        nonStop: null,
        travelClass:null
    },
    reducers: {
        changeSearchKey: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});
export const { changeSearchKey } = searchKeyReducer.actions
export default searchKeyReducer.reducer;




