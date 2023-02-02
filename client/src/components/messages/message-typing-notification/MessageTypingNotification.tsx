import { FC } from "react";

interface MessageTypingNotificationProps {
  notifications: string[];
}

const MessageTypingNotification: FC<MessageTypingNotificationProps> = ({
  notifications,
}) => {
  return (
    <ul>
      {notifications.map((notification) => (
        <li>{notification}</li>
      ))}
    </ul>
  );
};

export default MessageTypingNotification;
