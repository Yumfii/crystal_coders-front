import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, logOut, refresh } from './operations.js';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const initialState = {
  user: {
    email: null,
    password: null,
  },
  token: null,
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
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(refresh.rejected, handleRejected, state => {
        state.isRefreshing = true;
      });
  },
});

export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { registerUser, logIn, logOut, refresh } from './operations.js';
// import { INITIAL_STATE } from './initialState';

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };
// const slice = createSlice({
//   name: 'auth',
//   initialState: INITIAL_STATE,
//   extraReducers: builder => {
//     builder
//       .addCase(registerUser.pending, handlePending)
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//       })
//       .addCase(registerUser.rejected, handleRejected)
//       .addCase(logIn.pending, handlePending)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.accessToken = action.payload.accessToken;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(logOut.pending, handlePending)
//       .addCase(logOut.fulfilled, () => {
//         return INITIAL_STATE;
//       })
//       .addCase(logOut.rejected, handleRejected)
//       .addCase(refresh.pending, handlePending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refresh.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isRefreshing = false;
//         state.isLoggedIn = true;
//         state.accessToken = action.payload.accessToken;
//       })
//       .addCase(refresh.rejected, handleRejected, state => {
//         state.isRefreshing = true;
//       });
//   },
// });

// export const authReducer = slice.reducer;
