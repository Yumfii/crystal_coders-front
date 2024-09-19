import { createSlice } from '@reduxjs/toolkit';
import { fetchWaterListDaily, deleteWater } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const slice = createSlice({
  name: 'water',
  initialState: '', // Writing ASAP
  reducers: {
    setNewDate: (state, action) => {
      const newDate = action.payload;
      state.currentDate = newDate;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWaterListDaily.pending, handlePending)
      .addCase(fetchWaterListDaily.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyItems.dayItems = action.payload.data;
        state.dailyItems.totalWaterVolume = action.payload.totalWaterVolume;
      })
      .addCase(fetchWaterListDaily.rejected, handleRejected)

      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        const waterId = action.meta.arg;
        state.dailyItems.dayItems = state.dailyItems.dayItems.filter(
          item => item._id !== waterId
        );
      })
      .addCase(deleteWater.rejected, handleRejected);
  },
});

export const { setNewDate } = slice.actions;
export const waterReducer = slice.reducer;
