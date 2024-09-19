import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  waterEntries: [],
  currentEntry: null,
  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase('FETCH_WATER_SUCCESS', (state, action) => {
        state.currentEntry = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase('FETCH_WATER_FAILURE', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase('CREATE_WATER_SUCCESS', (state, action) => {
        state.waterEntries.push(action.payload);
        state.loading = false;
        state.error = null;
      })

      .addCase('CREATE_WATER_FAILURE', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase('UPDATE_WATER_SUCCESS', (state, action) => {
        const index = state.waterEntries.findIndex(entry => entry.id === action.payload.id);
        if (index !== -1) {
          state.waterEntries[index] = action.payload;
        }
        state.loading = false;
        state.error = null;
      })

      .addCase('UPDATE_WATER_FAILURE', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading, clearError } = waterSlice.actions;

export default waterSlice.reducer;

