import { createSlice } from "@reduxjs/toolkit";

import { socketService } from "../../services/socketService";
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
  reducers: {
    signout(state) {
      state.isAuth = false;
      state.token = null;
      socketService.disconnect();
    },
  },
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

export const authActions = authSlice.actions;
