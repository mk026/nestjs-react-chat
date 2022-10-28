import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../api/authApi";

export interface AuthState {
  isAuth: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
      }
    );
  },
});
