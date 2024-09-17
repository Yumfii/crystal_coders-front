import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com/';

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
    await axios.post('/users/logout');
    token.clearAuth();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
