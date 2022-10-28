import { FC } from "react";
import { Box, TextField } from "@mui/material";

const AddRoomForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Room name" />
      <TextField label="Room description" />
    </Box>
  );
};

export default AddRoomForm;
