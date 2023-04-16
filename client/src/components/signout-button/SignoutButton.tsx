import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";
import { Paths } from "../../routes";

const SignoutButton: FC = () => {
  const { signout } = useActions(authActions);
  const navigate = useNavigate();

  const signoutHandler = () => {
    signout();
    navigate(Paths.HOME);
  };

  return <Button onClick={signoutHandler}>Logout</Button>;
};

export default SignoutButton;
