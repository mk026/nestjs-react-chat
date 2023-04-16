import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import AuthLinks from "../auth-links";
import Navbar from "../navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { Paths } from "../../routes";
import SignoutButton from "../signout-button/SignoutButton";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <Box component="header" className={classes.header} data-testid="header">
      <Stack direction="row" alignItems="center">
        <Typography mr="2rem" component={NavLink} to={Paths.HOME}>
          React Chat
        </Typography>
        {isAuth && <Navbar />}
        {!isAuth && <AuthLinks />}
        {isAuth && <SignoutButton />}
      </Stack>
    </Box>
  );
};

export default Header;
