/* eslint-disable no-unused-vars */
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com';

// const token = {
//   setAuth(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   clearAuth() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const registerUser = createAsyncThunk(
//   'auth/signup',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post('/auth/signup', formData);
//       return response.data;
//     } catch (error) {
//       const errorMessage = error.response?.data?.data?.message || error.message;
//       toast.error(errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (loginData, thunkAPI) => {
//     try {
//       const response = await axios.post('/auth/signin', loginData);
//       return response.data.data;
//     } catch (error) {
//       const errorMessage = error.response?.data?.data?.message || error.message;

//       toast.error('Wrong email or password!');
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/auth/logout');
//     token.clearAuth();
//     return;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
//   try {
//     const { data } = await axios.post('/auth/refresh');
//     token.clearAuth();
//     return data.data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(
      'Authorization Header Set:',
      axios.defaults.headers.common.Authorization
    );
  }
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      console.log(data.data.accessToken);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com';

const token = {
  setAuth(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearAuth() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    token.clearAuth();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
