import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk } from "./Thunk";

const carsSlise = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const reducer = carsSlise.reducer;
