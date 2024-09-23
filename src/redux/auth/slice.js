import { createSlice } from '@reduxjs/toolkit';
import {
  signIn,
  signUp,
  logOut,
  refresh,
  updateUsersSettings,
  getUserById,
} from './operations.js';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   error: null,
// };

export const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    gender: null,
    weight: 0,
    sportActiveTime: 0,
    dailyWater: 2,
    avatar: null,
  },
  // allUsers: null,
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
        state.user = action.payload.data.user;
        state.user._id = action.payload.data.user._id;
        state.user.email = action.payload.data.user.email;
        state.accessToken = action.payload.accessToken;
        // state.accessToken = action.payload.data.accessToken;

        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
        state.user._id = action.payload.data.user._id;
        state.user.email = action.payload.data.user.email;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending, state => {
        state.isRefreshing = true;
      })
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user._id = action.payload.data.data._id;
        state.user.name = action.payload.data.data.name;
        state.user.email = action.payload.data.data.email;
        state.user.gender = action.payload.data.data.gender;
        state.user.weight = action.payload.data.data.weight;
        state.user.sportActiveTime = action.payload.data.data.sportActiveTime;
        state.user.dailyWater = action.payload.data.data.dailyWater;
        state.user.avatar = action.payload.data.data.avatar;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(refresh.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isRefreshing = false;
      //   state.isLoggedIn = true;
      //   state.accessToken = action.payload.accessToken;
      // })
      // .addCase(refresh.rejected, handleRejected, state => {
      //   state.isRefreshing = true;
      // })
      .addCase(updateUsersSettings.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.gender = action.payload.gender;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.weight = action.payload.weight;
        state.user.sportActiveTime = action.payload.time;
        state.user.dailyWater = action.payload.liters;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
