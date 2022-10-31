import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IMessage } from "../../../models/IMessage";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <Card>
      <Typography variant="body1">{message.content}</Typography>
    </Card>
  );
};

export default MessageItem;
