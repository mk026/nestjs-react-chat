import { Box, TextField } from "@mui/material";
import { FC } from "react";

const UpdatePasswordForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Old password" type="password" />
      <TextField label="New Password" type="password" />
      <TextField label="Confirm password" type="password" />
    </Box>
  );
};

export default UpdatePasswordForm;
