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
//   delete axios.defaults.headers.common["Authorization"];
// };

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      console.log(data.data.accessToken);
      console.log(data);
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
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('auth/register', credentials);
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

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    //clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    const { data } = await axios.post('/auth/refresh');
    return data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
