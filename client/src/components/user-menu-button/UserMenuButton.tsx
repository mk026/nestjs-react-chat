import { FC } from "react";
import { Button } from "@mui/material";

import classes from "./UserMenuButton.module.scss";

interface UserMenuButtonProps {
  onClick: () => void;
  name: string;
}

const UserMenuButton: FC<UserMenuButtonProps> = ({ onClick, name }) => {
  return (
    <Button className={classes.button} onClick={onClick}>
      {name}
    </Button>
  );
};

export default UserMenuButton;
