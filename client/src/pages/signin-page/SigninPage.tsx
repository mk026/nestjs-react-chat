import { FC } from "react";
import { Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form/SigninForm";

const SigninPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SigninPage</Typography>
      <SigninForm />
    </>
  );
};

export default SigninPage;
