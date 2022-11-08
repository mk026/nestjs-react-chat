import { FC } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <Box component="header">
      <Stack direction="row" alignItems="center">
        <Typography mr="2rem">React Chat</Typography>
        <Navbar />
        {!isAuth && <Button>Logout</Button>}
      </Stack>
    </Box>
  );
};

export default Header;
