import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        changeLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { changeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;