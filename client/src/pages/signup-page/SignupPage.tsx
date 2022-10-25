import { FC } from "react";
import { Typography } from "@mui/material";

import SignupForm from "../../components/forms/signup-form/SignupForm";

const SignupPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SignupPage</Typography>
      <SignupForm />
    </>
  );
};

export default SignupPage;
