import { FC } from "react";
import { Stack } from "@mui/material";

import { IMessage } from "../../../models/IMessage";
import MessageItem from "../message-item/MessageItem";

import classes from "./MessagesList.module.scss";

interface MessagesListProps {
  messages: IMessage[];
}

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <Stack className={classes.list}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Stack>
  );
};

export default MessagesList;
