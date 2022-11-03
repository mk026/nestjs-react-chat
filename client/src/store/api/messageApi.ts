import { baseApi } from "./baseApi";
import { IMessage } from "../../models/IMessage";

export const MESSAGES_URL = "/messages";

export const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<IMessage[], number>({
      query: (roomId) => ({ url: MESSAGES_URL, params: { roomId } }),
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
