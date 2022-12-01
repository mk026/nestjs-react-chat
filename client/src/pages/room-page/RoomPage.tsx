import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import AddMessageForm from "../../components/forms/add-message-form/AddMessageForm";
import MessagesList from "../../components/messages/messages-list/MessagesList";
import { useGetMessagesQuery } from "../../store/api/messageApi";

const RoomPage: FC = () => {
  const { id } = useParams<"id">();
  const { data } = useGetMessagesQuery(Number(id));

  const pageRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    pageRef.current?.scrollIntoView({ block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <Box ref={pageRef}>
      <MessagesList messages={data || []} />
      <AddMessageForm roomId={Number(id)} />
    </Box>
  );
};

export default RoomPage;
