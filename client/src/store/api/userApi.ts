import { baseApi, HttpMethod } from "./baseApi";
import { IUser } from "../../models/user";
import { PasswordFormValues } from "../../validation/passwordValidation";
import { config } from "../../config";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], number>({
      query: (roomId) => ({ url: config.usersUrl, params: { roomId } }),
    }),
    getUser: builder.query<IUser, number>({
      query: (id: number) => ({ url: `${config.usersUrl}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, IUser>({
      query: (body: IUser) => ({
        url: `${config.usersUrl}/${body.id}`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    updatePassword: builder.mutation<void, PasswordFormValues>({
      query: (body: PasswordFormValues) => ({
        url: config.passwordUpdateUrl,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `${config.usersUrl}/${id}`,
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
