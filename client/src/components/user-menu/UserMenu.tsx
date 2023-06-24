import { FC } from "react";
import { Button, Stack } from "@mui/material";

const UserMenu: FC = () => {
  return (
    <Stack>
      <Button>My Profile</Button>
      <Button>My Rooms</Button>
      <Button>Signout</Button>
    </Stack>
  );
};

export default UserMenu;
