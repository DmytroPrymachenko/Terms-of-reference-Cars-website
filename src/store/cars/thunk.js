import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../components/api/api";
import { toast } from "react-toastify";

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
      if (error.response && error.response.status === 404) {
        const errorMessage =
          "The car according to these parameters was not found. Try changing the settings.";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(error.message);
      }
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
      if (error.response && error.response.status === 404) {
        const errorMessage =
          "The car according to these parameters was not found. Try changing the settings.";
        toast.error(errorMessage);
        thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
