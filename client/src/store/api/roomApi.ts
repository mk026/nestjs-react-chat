import { baseApi, HttpMethod } from "./baseApi";
import { AddRoomDto, IRoom, UpdateRoomDto } from "../../models/room";
import { config } from "../../config";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => ({ url: config.roomsUrl }),
    }),
    getRoom: builder.query<IRoom, number>({
      query: (id) => ({ url: `${config.roomsUrl}/${id}` }),
    }),
    searchRooms: builder.query<IRoom[], void>({
      query: () => ({ url: config.searchRoomsUrl }),
    }),
    addRoom: builder.mutation<IRoom, AddRoomDto>({
      query: (body) => ({
        url: config.roomsUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
    updateRoom: builder.mutation<IRoom, UpdateRoomDto>({
      query: (body) => ({
        url: `${config.roomsUrl}/${body.id}`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    deleteRoom: builder.mutation<void, number>({
      query: (id) => ({
        url: `${config.roomsUrl}/${id}`,
        method: HttpMethod.DELETE,
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
