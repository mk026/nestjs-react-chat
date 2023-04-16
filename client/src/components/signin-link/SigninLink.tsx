import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { Paths } from "../../routes";

const SigninLink: FC = () => {
  return (
    <Typography variant="body1">
      Already have an account?{" "}
      <Button component={Link} to={Paths.SIGNIN}>
        Signin
      </Button>
    </Typography>
  );
};

export default SigninLink;
