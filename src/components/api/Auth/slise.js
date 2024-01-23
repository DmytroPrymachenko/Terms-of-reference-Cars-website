import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk, getFilterParamsThunk } from "./Thunk";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    filter: [],
    isLoading: false,
    error: null,
    page: 1,
    carsPerPage: 12,
    isSearch: false,
  },
  reducers: {
    incrementPage: (state, { payload }) => {
      state.page = payload;
    },
    setSearch: (state, { payload }) => {
      state.isSearch = payload;
    },
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.page !== 1
          ? (state.cars = [...state.cars, ...action.payload])
          : (state.cars = action.payload);
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFilterParamsThunk.fulfilled, (state, action) => {
        state.filter = action.payload;
      })
      .addCase(getFilterParamsThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const reducer = carsSlice.reducer;
export const { incrementPage, setSearch, setCars, setFilter } =
  carsSlice.actions;

export default carsSlice.reducer;
