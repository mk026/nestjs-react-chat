import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" className={classes.wrapper}>
      <Button
        component={Link}
        to={Paths.SIGNUP}
        variant="outlined"
        className={classes["signup-btn"]}
      >
        Create Account
      </Button>
      <Button component={Link} to={Paths.SIGNIN} variant="contained">
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
