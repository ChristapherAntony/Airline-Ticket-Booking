import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user_name: '',
  email: '',
  profile_image: '',
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
