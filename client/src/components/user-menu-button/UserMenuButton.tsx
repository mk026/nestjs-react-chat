import { FC } from "react";
import { Button } from "@mui/material";

interface UserMenuButtonProps {
  onClick: () => void;
  name: string;
}

const UserMenuButton: FC<UserMenuButtonProps> = ({ onClick, name }) => {
  return <Button onClick={onClick}>{name}</Button>;
};

export default UserMenuButton;
