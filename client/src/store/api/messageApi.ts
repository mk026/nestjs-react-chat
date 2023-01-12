import { baseApi } from "./baseApi";
import { IMessage } from "../../models/IMessage";
import { socketService } from "../../services/socketService";
import { config } from "../../config";

export interface AddMessageDto {
  content: string;
  roomId: number;
}

export const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<IMessage[], number>({
      query: (roomId) => ({ url: config.messagesUrl, params: { roomId } }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;
          socketService.joinRoom(arg);
          socketService.subscribeToMessages((data: IMessage) => {
            updateCachedData((draft) => {
              draft.push(data);
            });
          });
        } catch (error) {
          console.log(error);
        }
        await cacheEntryRemoved;
      },
    }),
    addMessage: builder.mutation<null, AddMessageDto>({
      queryFn: (data) => {
        socketService.sendMessage(data);
        return { data: null };
      },
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messageApi;
