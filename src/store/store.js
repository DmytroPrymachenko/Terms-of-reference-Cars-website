import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./cars/slise";

export const store = configureStore({ reducer });
