import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchUserById } from "./operations";

const initialState = {
  user: {
    email:
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload;
      })
})

export default userSlice.reducer
