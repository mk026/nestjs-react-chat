import { baseApi } from "./baseApi";
import { AddMessageDto, IMessage } from "../../models/message";
import { socketService } from "../../services/socketService";
import { config } from "../../config";

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
    notifyTyping: builder.mutation<null, number>({
      queryFn: (roomId) => {
        socketService.notifyTyping(roomId);
        return { data: null };
      },
    }),
    getTypingNotifications: builder.query<string[], void>({
      queryFn: () => ({ data: [] }),
      async onQueryStarted(arg, { queryFulfilled, updateCachedData }) {
        await queryFulfilled;
        socketService.subscribeToTypingNotifications((notification) => {
          updateCachedData((draft) => {
            draft.push(notification);
          });
        });
      },
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useAddMessageMutation,
  useGetTypingNotificationsQuery,
  useNotifyTypingMutation,
} = messageApi;
