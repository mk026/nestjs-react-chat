import { FC } from "react";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";

import { IMessage } from "../../../models/message";

import classes from "./MessageItem.module.scss";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Avatar alt={message.owner.name} src={message.owner.avatarUrl} />
        <Typography>{message.owner.name}</Typography>
      </Stack>
      <Card classes={{ root: classes.message }}>
        <Typography variant="body1">{message.content}</Typography>
      </Card>
    </Box>
  );
};

export default MessageItem;
