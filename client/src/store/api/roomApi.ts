import { baseApi, HttpMethod } from "./baseApi";
import { IRoom } from "../../models/IRoom";

export const ROOMS_URL = "/rooms";

export interface AddRoomDto {
  title: string;
  description: string;
}

export interface UpdateRoomDto {
  id: number;
  title?: string;
  description?: string;
}

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => ({ url: ROOMS_URL }),
    }),
    getRoom: builder.query<IRoom, number>({
      query: (id) => ({ url: `${ROOMS_URL}/${id}` }),
    }),
    addRoom: builder.mutation<IRoom, AddRoomDto>({
      query: (body) => ({
        url: ROOMS_URL,
        method: HttpMethod.POST,
        body,
      }),
    }),
    updateRoom: builder.mutation<IRoom, UpdateRoomDto>({
      query: (body) => ({
        url: `${ROOMS_URL}/${body.id}`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomQuery,
  useAddRoomMutation,
  useUpdateRoomMutation,
} = roomApi;
