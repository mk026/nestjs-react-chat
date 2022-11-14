import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const UpdateRoomForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Room name" />
      <TextField label="Room description" />
      <Button type="submit">Update</Button>
    </Box>
  );
};

export default UpdateRoomForm;
