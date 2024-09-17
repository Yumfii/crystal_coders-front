import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com/';

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

// const clearAuthHeader = () => {
//   delete axios.defaults.headers.common.Authorization;
// };

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

export const signUp = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', {
        email,
        password,
      });
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
