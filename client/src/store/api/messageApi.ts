import { baseApi } from "./baseApi";
import { IMessage } from "../../models/IMessage";
import { io } from "socket.io-client";

export const MESSAGES_URL = "/messages";

export const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<IMessage[], number>({
      query: (roomId) => ({ url: MESSAGES_URL, params: { roomId } }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = io("ws://localhost:3000");
        try {
          await cacheDataLoaded;
          socket.on("message", (data: IMessage) => {
            updateCachedData((draft) => {
              draft.push(data);
            });
          });
        } catch (error) {
          console.log(error);
        }
        await cacheEntryRemoved;
        socket.disconnect();
      },
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
