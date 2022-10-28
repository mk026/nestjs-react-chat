import { baseApi } from "./baseApi";

export const ROOMS_URL = "/signup";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchRooms: builder.query({
      query: () => ({ url: ROOMS_URL }),
    }),
  }),
});

export const { useFetchRoomsQuery } = authApi;
