import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "../navbar/Navbar";

const Header: FC = () => {
  return (
    <Box component="header">
      <Stack direction="row" alignItems="center">
        <Typography mr="2rem">React Chat</Typography>
        <Navbar />
      </Stack>
    </Box>
  );
};

export default Header;
