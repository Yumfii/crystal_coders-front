import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.headers.common['Authorization'] = `Bearer Unr0UudmUR0bRy0vdFa9+5Kcr0nx9CByWuX0Gc6y`;

export const fetchUserById = createAsyncThunk('fetchUser',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`/users/${id}`)
      console.log(resp.data);
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
