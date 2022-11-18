import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

const AuthLinks: FC = () => {
  return (
    <Stack>
      <Button component={NavLink} to={Paths.SIGNUP}>
        Create Account
      </Button>
      <Button component={NavLink} to={Paths.SIGNIN}>
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
