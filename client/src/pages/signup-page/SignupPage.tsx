import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import SignupForm from "../../components/forms/signup-form/SignupForm";
import { Paths } from "../../routes";

const SignupPage: FC = () => {
  return (
    <>
      <Typography variant="h1">SignupPage</Typography>
      <SignupForm />
      <Typography variant="body1">
        Already have an account?{" "}
        <Button component={Link} to={Paths.SIGNIN}>
          Signin
        </Button>
      </Typography>
    </>
  );
};

export default SignupPage;
