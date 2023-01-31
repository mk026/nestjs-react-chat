import { baseApi, HttpMethod } from "./baseApi";
import { IUser, UpdatePasswordDto, UpdateUserDto } from "../../models/user";
import { config } from "../../config";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], number>({
      query: (roomId) => ({ url: config.usersUrl, params: { roomId } }),
    }),
    getUser: builder.query<IUser, number>({
      query: (id) => ({ url: `${config.usersUrl}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, UpdateUserDto>({
      query: (body) => ({
        url: config.usersUrl,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordDto>({
      query: (body) => ({
        url: config.passwordUpdateUrl,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
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
