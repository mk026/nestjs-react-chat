import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useGetRoomQuery } from "../../store/api/roomApi";
import UpdateRoomForm from "../../components/forms/update-room-form";
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
      <Typography>Update room</Typography>
      {room && <UpdateRoomForm room={room} />}
    </Box>
  );
};

export default UpdateRoomPage;
