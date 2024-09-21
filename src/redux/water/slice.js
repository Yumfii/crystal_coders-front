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

const initialState = {
  waterEntries: [],
  currentEntry: null,
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase('FETCH_WATER_SUCCESS', (state, action) => {
        state.currentEntry = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase('FETCH_WATER_FAILURE', (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase('CREATE_WATER_SUCCESS', (state, action) => {
        state.waterEntries.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase('CREATE_WATER_FAILURE', (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase('UPDATE_WATER_SUCCESS', (state, action) => {
        const index = state.waterEntries.findIndex(
          entry => entry.id === action.payload.id
        );
        if (index !== -1) {
          state.waterEntries[index] = action.payload;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase('UPDATE_WATER_FAILURE', (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchWaterListDaily.pending, handlePending)
      .addCase(fetchWaterListDaily.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyItems.dayItems = action.payload.data;
        state.dailyItems.totalWaterVolume = action.payload.totalWaterVolume;
      })
      .addCase(fetchWaterListDaily.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.initialState.isLoading = false;
        const waterId = action.meta.arg;
        state.dailyItems.dayItems = state.dailyItems.dayItems.filter(
          item => item._id !== waterId
        );
      })
      .addCase(deleteWater.rejected, handleRejected);
  },
});

export const { setLoading, clearError } = waterSlice.actions;
export default waterSlice.reducer;
