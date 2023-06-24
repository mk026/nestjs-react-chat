import { FC, useState } from "react";
import { Box, Stack } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import AuthLinks from "../auth-links";
import Navbar from "../navbar";
import AppTitle from "../app-title";
import UserMenu from "../user-menu";
import UserMenuButton from "../user-menu-button";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isAuth, user } = useAppSelector(getAuthState);

  const toggleUserMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <Box component="header" className={classes.header} data-testid="header">
      <Stack direction="row" alignItems="center">
        <AppTitle />
        {isAuth && <Navbar />}
        {isAuth ? (
          <UserMenuButton onClick={toggleUserMenu} name={user!.name} />
        ) : (
          <AuthLinks />
        )}
      </Stack>
      {menuIsOpen && <UserMenu />}
    </Box>
  );
};

export default Header;
