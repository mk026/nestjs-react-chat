import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" sx={{ marginLeft: "auto" }}>
      <Button
        component={NavLink}
        to={Paths.SIGNUP}
        variant="outlined"
        classes={{ root: classes["signup-btn"] }}
      >
        Create Account
      </Button>
      <Button component={NavLink} to={Paths.SIGNIN} variant="contained">
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
