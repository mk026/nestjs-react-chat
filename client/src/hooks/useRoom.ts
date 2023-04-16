import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useGetRoomQuery } from "../store/api/roomApi";
import {
  useGetMessagesQuery,
  useGetTypingNotificationsQuery,
} from "../store/api/messageApi";

export const useRoom = () => {
  const { id: stringId } = useParams<"id">();
  const id = Number(stringId);
  const { data: room } = useGetRoomQuery(id);
  const { data: messages } = useGetMessagesQuery(id);
  const { data: notifications } = useGetTypingNotificationsQuery();

  const pageRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    pageRef.current?.scrollIntoView({ block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return {
    room,
    messages,
    notifications,
    pageRef,
    id,
  };
};
