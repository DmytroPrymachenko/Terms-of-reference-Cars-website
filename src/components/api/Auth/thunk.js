import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const getCarThunk = createAsyncThunk(
  "cars/getAllCar",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("cars");

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
