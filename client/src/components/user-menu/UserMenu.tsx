import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";

import classes from "./UserMenu.module.scss";

const UserMenu: FC = () => {
  const { signout } = useActions(authActions);

  return (
    <Stack className={classes.menu}>
      <Link to={Paths.PROFILE}>My Profile</Link>
      <Link to={Paths.ROOMS}>My Rooms</Link>
      <Button onClick={signout}>Signout</Button>
    </Stack>
  );
};

export default UserMenu;
