import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userName: '',
  userEmail: '',
  userPhoto: '',
  isLoggedIn:false
};

const userprofileSlice = createSlice({
  name: 'userprofile',
  initialState,
  reducers: {
    changeUserProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUserProfile: () => {
      return { ...initialState };
    },
  },
});

export const { changeUserProfile, resetUserProfile } = userprofileSlice.actions;
export default userprofileSlice.reducer;
