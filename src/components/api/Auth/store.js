import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slise";

export const store = configureStore({ reducer });
