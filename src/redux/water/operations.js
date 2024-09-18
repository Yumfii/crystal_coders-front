/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://crystal-coders-back.onrender.com/';

const setAuth = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuth = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuth(token);

      await axios.delete(`water/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { instance } from '../../utils/axios';

// export const deleteWater = createAsyncThunk(
//   'water/deleteWater',
//   async (waterId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/water/${waterId}`);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
