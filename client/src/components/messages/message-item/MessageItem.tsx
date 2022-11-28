import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IMessage } from "../../../models/IMessage";

import classes from "./MessageItem.module.scss";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <Card classes={{ root: classes.message }}>
      <Typography variant="body1">{message.content}</Typography>
    </Card>
  );
};

export default MessageItem;
