import { FC } from "react";
import { useParams } from "react-router-dom";

import AddMessageForm from "../../components/forms/add-message-form/AddMessageForm";
import MessagesList from "../../components/messages/messages-list/MessagesList";
import { useGetMessagesQuery } from "../../store/api/messageApi";

const RoomPage: FC = () => {
  const { id } = useParams<"id">();
  const { data } = useGetMessagesQuery(Number(id));

  return (
    <div>
      <MessagesList messages={data || []} />
      <AddMessageForm />
    </div>
  );
};

export default RoomPage;
