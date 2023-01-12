import { baseApi, HttpMethod } from "./baseApi";
import { SigninFormValues } from "../../validation/signinValidation";
import { SignupFormValues } from "../../validation/signupValidation";
import { IUser } from "../../models/IUser";
import { socketService } from "../../services/socketService";
import { config } from "../../config";

export interface AuthResponse {
  user: IUser;
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: (body) => ({
        url: config.signupUrl,
        method: HttpMethod.POST,
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socketService.connectWithAuthToken(token);
      },
    }),
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: (body) => ({
        url: config.signinUrl,
        method: HttpMethod.POST,
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socketService.connectWithAuthToken(token);
      },
    }),
    check: builder.mutation<AuthResponse, string>({
      query: (token) => ({
        url: config.checkAuthUrl,
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
