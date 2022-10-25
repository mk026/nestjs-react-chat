import { Box, TextField } from "@mui/material";
import { FC } from "react";

const SigninForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
    </Box>
  );
};

export default SigninForm;
