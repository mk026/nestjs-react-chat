import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchRoomForm: FC = () => {
  return (
    <Box component="form">
      <TextField placeholder="Search room..." />
      <Button>Search</Button>
    </Box>
  );
};

export default SearchRoomForm;
