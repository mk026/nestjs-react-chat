import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form/SigninForm";
import { Paths } from "../../routes";

const SigninPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SigninPage</Typography>
      <SigninForm />
      <Typography variant="body1">
        Don't have an account?{" "}
        <Button component={Link} to={Paths.SIGNUP}>
          Signup
        </Button>
      </Typography>
    </>
  );
};

export default SigninPage;
