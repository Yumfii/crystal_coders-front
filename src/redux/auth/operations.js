import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com/';
// axios.defaults.baseURL = 'http://localhost:3000/';

const setAuthHeader = token => {
  if (token) {
    // console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(
      'Authorization Header Set:',
      axios.defaults.headers.common.Authorization
    );
  }
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      // console.log(data.data.accessToken);
      // console.log(data);
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
    try {
      const { data } = await axios.post('auth/register', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
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

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(
      '/auth/logout',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    const { data } = await axios.post(
      'auth/refresh',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateUsersSettings = createAsyncThunk(
  'updateUser',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `users/${id}`,
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
