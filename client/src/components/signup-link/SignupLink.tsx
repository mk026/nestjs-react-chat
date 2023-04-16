import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { Paths } from "../../routes";

const SignupLink: FC = () => {
  return (
    <Typography variant="body1">
      Don't have an account?{" "}
      <Button component={Link} to={Paths.SIGNUP}>
        Signup
      </Button>
    </Typography>
  );
};

export default SignupLink;
