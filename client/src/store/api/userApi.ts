import { baseApi, HttpMethod } from "./baseApi";
import { IUser } from "../../models/IUser";
import { PasswordFormValues } from "../../validation/passwordValidation";

export const USERS_URL = "/users";
export const PASSWORD_UPDATE_URL = "/users/password";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({ url: USERS_URL }),
    }),
    getUser: builder.query<IUser, number>({
      query: (id: number) => ({ url: `${USERS_URL}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, IUser>({
      query: (body: IUser) => ({
        url: `${USERS_URL}/${body.id}`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    updatePassword: builder.mutation<void, PasswordFormValues>({
      query: (body: PasswordFormValues) => ({
        url: PASSWORD_UPDATE_URL,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `${USERS_URL}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
} = userApi;
