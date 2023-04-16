import { FC } from "react";
import { Typography } from "@mui/material";

import SignupForm from "../../components/forms/signup-form";
import SigninLink from "../../components/signin-link";

const SignupPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SignupPage</Typography>
      <SignupForm />
      <SigninLink />
    </>
  );
};

export default SignupPage;
