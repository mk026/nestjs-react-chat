import { baseApi, HttpMethod, socket } from "./baseApi";
import { SigninFormValues } from "../../validation/signinValidation";
import { SignupFormValues } from "../../validation/signupValidation";

export interface AuthResponse {
  token: string;
}

export const SIGNUP_URL = "/auth/signup";
export const SIGNIN_URL = "/auth/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socket.auth = { token };
        socket.connect();
      },
    }),
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const token = (await queryFulfilled).data.token;
        socket.auth = { token };
        socket.connect();
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
