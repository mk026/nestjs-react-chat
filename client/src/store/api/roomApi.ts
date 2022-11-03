import { baseApi } from "./baseApi";

export const ROOMS_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({ url: ROOMS_URL }),
    }),
  }),
});

export const { useGetRoomsQuery } = roomApi;
