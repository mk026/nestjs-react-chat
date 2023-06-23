import { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import PageTitle from "../../components/page-title";
import UpdateRoomForm from "../../components/forms/update-room-form";
import { useGetRoomQuery } from "../../store/api/roomApi";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { Paths } from "../../routes";

const UpdateRoomPage: FC = () => {
  const { id: stringId } = useParams<"id">();
  const id = Number(stringId);
  const { data: room } = useGetRoomQuery(id);
  const { user } = useAppSelector(getAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id !== room?.owner.id) {
      navigate(Paths.HOME);
    }
  }, [user, room, navigate]);

  return (
    <Box>
      <PageTitle>Update room</PageTitle>
      {room && <UpdateRoomForm room={room} />}
    </Box>
  );
};

export default UpdateRoomPage;
