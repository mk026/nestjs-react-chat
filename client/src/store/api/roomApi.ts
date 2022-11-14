import { baseApi, HttpMethod } from "./baseApi";
import { IRoom } from "../../models/IRoom";
import { socketService } from "../../services/socketService";

export const ROOMS_URL = "/rooms";

export interface AddRoomDto {
  title: string;
  description: string;
}

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => ({ url: ROOMS_URL }),
    }),
    getRoom: builder.query<IRoom, number>({
      query: (id) => ({ url: `${ROOMS_URL}/${id}` }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await queryFulfilled;
        socketService.joinRoom(arg);
      },
    }),
    addRoom: builder.mutation<IRoom, AddRoomDto>({
      query: (body) => ({
        url: ROOMS_URL,
        method: HttpMethod.POST,
        body,
      }),
    }),
    updateRoom: builder.mutation<IRoom, IRoom>({
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
