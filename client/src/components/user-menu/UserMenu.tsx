import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

const UserMenu: FC = () => {
  return (
    <Stack>
      <Link to={Paths.PROFILE}>My Profile</Link>
      <Link to={Paths.ROOMS}>My Rooms</Link>
      <Button>Signout</Button>
    </Stack>
  );
};

export default UserMenu;
