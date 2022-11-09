import { baseApi, socket } from "./baseApi";
import { IRoom } from "../../models/IRoom";

export const ROOMS_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => ({ url: ROOMS_URL }),
    }),
    getRoom: builder.query<IRoom, number>({
      query: (id) => ({ url: `${ROOMS_URL}/${id}` }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await queryFulfilled;
        socket.emit("join", arg);
      },
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomQuery } = roomApi;
