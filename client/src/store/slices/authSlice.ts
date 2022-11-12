import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

import { socketService } from "../../services/socketService";
import { authApi } from "../api/authApi";

export interface AuthState {
  isAuth: boolean;
  token: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
  user: null,
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
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const authActions = authSlice.actions;
