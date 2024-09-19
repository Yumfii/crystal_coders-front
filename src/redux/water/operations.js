import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://crystal-coders-back.onrender.com',
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const createWaterEntry = async data => {
  try {
    const response = await axiosInstance.post('/water', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const updateWaterEntry = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/water/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const fetchWaterEntry = async id => {
  try {
    const response = await axiosInstance.get(`/water/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

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
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default axiosInstance;
