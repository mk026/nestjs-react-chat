import { FC } from "react";
import { Tab, Tabs } from "@mui/material";
import { NavLink, useLocation, useMatch } from "react-router-dom";
import { Paths } from "../../routes";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const isHomeMatch = useMatch("/");

  return (
    <Tabs component="nav" value={pathname}>
      <Tab
        label="Rooms"
        value={isHomeMatch?.pathname ?? Paths.ROOMS}
        component={NavLink}
        to={Paths.ROOMS}
      />
      <Tab
        label="Room"
        value={Paths.ROOM}
        component={NavLink}
        to={Paths.ROOM}
      />
      <Tab
        label="Profile"
        value={Paths.PROFILE}
        component={NavLink}
        to={Paths.PROFILE}
      />
      <Tab
        label="Signup"
        value={Paths.SIGNUP}
        component={NavLink}
        to={Paths.SIGNUP}
      />
      <Tab
        label="Signin"
        value={Paths.SIGNIN}
        component={NavLink}
        to={Paths.SIGNIN}
      />
    </Tabs>
  );
};

export default Navbar;
