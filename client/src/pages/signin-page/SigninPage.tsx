import { FC } from "react";
import { Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form";
import SignupLink from "../../components/signup-link";

const SigninPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SigninPage</Typography>
      <SigninForm />
      <SignupLink />
    </>
  );
};

export default SigninPage;
