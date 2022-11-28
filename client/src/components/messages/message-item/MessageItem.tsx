import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IMessage } from "../../../models/IMessage";

import classes from "./MessageItem.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { getAuthState } from "../../../store/selectors/authSelectors";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  const { user } = useAppSelector(getAuthState);
  const styles = [classes.message];
  if (message.ownerId === user?.id) {
    styles.push(classes["message--own"]);
  } else {
    styles.push(classes["message--other"]);
  }

  return (
    <Card classes={{ root: styles.join(" ") }}>
      <Typography variant="body1">{message.content}</Typography>
    </Card>
  );
};

export default MessageItem;
