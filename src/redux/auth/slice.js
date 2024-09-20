import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './operations.js';

// const initialState = {
//   user: {
//     email: null,
//     password: null,
//     gender: null,
//     weight: 0,
//     sportActiveTime: 0,
//     dailyWater: 2,
//     avatar: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   error: null,
// };

export const initialState = {
  user: {
    name: '',
    email: null,
    gender: null,
    weight: 0,
    sportActiveTime: 0,
    dailyWater: 0,
    avatar: null,
  },
  allUsers: null,
  accessToken: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log('Payload:', action.payload);
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(signUp.pending, state => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
