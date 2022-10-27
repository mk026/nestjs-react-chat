import { Box, TextField } from "@mui/material";
import { FC } from "react";

const UpdateProfileForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Name" />
      <TextField label="Email" type="email" />
    </Box>
  );
};

export default UpdateProfileForm;
