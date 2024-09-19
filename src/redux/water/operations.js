import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWaterListDaily = createAsyncThunk(
  'water/perDay',
  async ({ date }, thunkAPI) => {
    try {
      const response = await axios.get(`/water/perDay`, {
        params: {
          day: date,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${waterId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
