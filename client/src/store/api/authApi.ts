import { baseApi, HttpMethod } from "./baseApi";
import { SigninFormValues } from "../../validation/signinValidation";
import { SignupFormValues } from "../../validation/signupValidation";
import { IUser } from "../../models/IUser";
import { socketService } from "../../services/socketService";

export interface AuthResponse {
  user: IUser;
  token: string;
}

export const SIGNUP_URL = "/auth/signup";
export const SIGNIN_URL = "/auth/signin";
export const CHECK_URL = "/auth/check";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socketService.connectWithAuthToken(token);
      },
    }),
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socketService.connectWithAuthToken(token);
      },
    }),
    check: builder.mutation<AuthResponse, string>({
      query: (token) => ({
        url: CHECK_URL,
        method: HttpMethod.POST,
        body: { token },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socketService.connectWithAuthToken(token);
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
