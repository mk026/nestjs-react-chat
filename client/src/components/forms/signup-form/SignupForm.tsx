import { Box, TextField } from "@mui/material";
import { FC } from "react";

const SignupForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Name" />
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <TextField label="Confirm password" type="password" />
    </Box>
  );
};

export default SignupForm;
