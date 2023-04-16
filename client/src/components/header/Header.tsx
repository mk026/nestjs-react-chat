import { FC } from "react";
import { Box, Stack } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import AuthLinks from "../auth-links";
import Navbar from "../navbar";
import AppTitle from "../app-title";
import SignoutButton from "../signout-button";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <Box component="header" className={classes.header} data-testid="header">
      <Stack direction="row" alignItems="center">
        <AppTitle />
        {isAuth && <Navbar />}
        {isAuth ? <SignoutButton /> : <AuthLinks />}
      </Stack>
    </Box>
  );
};

export default Header;
