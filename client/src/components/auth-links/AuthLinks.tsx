import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" sx={{ marginLeft: "auto" }}>
      <Button
        component={NavLink}
        to={Paths.SIGNUP}
        variant="outlined"
        sx={{ marginRight: "1rem" }}
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
