import { baseApi } from "./baseApi";
import { IRoom } from "../../models/IRoom";

export const ROOMS_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => ({ url: ROOMS_URL }),
    }),
  }),
});

export const { useGetRoomsQuery } = roomApi;
