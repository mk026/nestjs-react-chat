import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetRoomQuery } from "../../store/api/roomApi";
import UpdateRoomForm from "../../components/forms/update-room-form";

const UpdateRoomPage: FC = () => {
  const { id: stringId } = useParams<"id">();
  const id = Number(stringId);
  const { data: room } = useGetRoomQuery(id);

  return (
    <Box>
      <Typography>Update room</Typography>
      {room && <UpdateRoomForm room={room} />}
    </Box>
  );
};

export default UpdateRoomPage;
