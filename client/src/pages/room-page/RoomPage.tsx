import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import AddMessageForm from "../../components/forms/add-message-form";
import MessagesList from "../../components/messages/messages-list";
import RoomHeader from "../../components/rooms/room-header";
import MessageTypingNotification from "../../components/messages/message-typing-notification";
import { useGetRoomQuery } from "../../store/api/roomApi";
import {
  useGetMessagesQuery,
  useGetTypingNotificationsQuery,
} from "../../store/api/messageApi";

const RoomPage: FC = () => {
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

  return (
    <Box ref={pageRef}>
      {room && <RoomHeader room={room} />}
      <MessagesList messages={messages || []} />
      <MessageTypingNotification notifications={notifications || []} />
      <AddMessageForm roomId={id} />
    </Box>
  );
};

export default RoomPage;
