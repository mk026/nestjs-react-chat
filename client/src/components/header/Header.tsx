import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";
import { Paths } from "../../routes";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const { signout } = useActions(authActions);
  const navigate = useNavigate();

  const signoutHandler = () => {
    signout();
    navigate(Paths.HOME);
  };

  return (
    <Box component="header">
      <Stack direction="row" alignItems="center">
        <Typography mr="2rem">React Chat</Typography>
        <Navbar />
        {isAuth && <Button onClick={signoutHandler}>Logout</Button>}
      </Stack>
    </Box>
  );
};

export default Header;
