import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

import AuthLinks from "../auth-links/AuthLinks";
import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";
import { Paths } from "../../routes";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const { signout } = useActions(authActions);
  const navigate = useNavigate();

  const signoutHandler = () => {
    signout();
    navigate(Paths.HOME);
  };

  return (
    <Box component="header" className={classes.header}>
      <Stack direction="row" alignItems="center">
        <Typography mr="2rem" component={NavLink} to={Paths.HOME}>
          React Chat
        </Typography>
        <Navbar />
        {!isAuth && <AuthLinks />}
        {isAuth && <Button onClick={signoutHandler}>Logout</Button>}
      </Stack>
    </Box>
  );
};

export default Header;
