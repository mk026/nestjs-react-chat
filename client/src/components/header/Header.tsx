import { FC } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import Navbar from "../navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import { signout } from "../../store/slices/authSlice";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const dispatch = useAppDispatch();

  const signoutHandler = () => dispatch(signout());

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
