import { FC } from "react";
import { Box, Typography } from "@mui/material";

import AddRoomForm from "../../components/forms/add-room-form";

const AddRoomPage: FC = () => {
  return (
    <Box>
      <Typography>Add new room</Typography>
      <AddRoomForm />
    </Box>
  );
};

export default AddRoomPage;
