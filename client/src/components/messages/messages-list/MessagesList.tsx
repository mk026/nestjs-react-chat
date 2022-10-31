import { FC } from "react";
import { Stack } from "@mui/material";

import { IMessage } from "../../../models/IMessage";
import MessageItem from "../message-item/MessageItem";

interface MessagesListProps {
  messages: IMessage[];
}

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <Stack>
      {messages.map((message) => (
        <MessageItem message={message} />
      ))}
    </Stack>
  );
};

export default MessagesList;
