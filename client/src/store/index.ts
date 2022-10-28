import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export const store = setupStore();
