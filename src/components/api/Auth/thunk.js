import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const getCarThunk = createAsyncThunk(
  "cars/getAllCar",
  async ({ page, carsPerPage, make, rentalPrice }, thunkAPI) => {
    try {
      const { data } = await api.get("cars", {
        params: {
          p: page,
          l: carsPerPage,
          make: make,
          rentalPrice: rentalPrice,
        },
      });

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilterParamsThunk = createAsyncThunk(
  "cars/getFilterParamsThunk",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("cars", {});

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
