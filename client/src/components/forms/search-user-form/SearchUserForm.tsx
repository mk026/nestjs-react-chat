import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchUserForm: FC = () => {
  return (
    <Box component="form">
      <TextField placeholder="Search User..." />
      <Button>Search</Button>
    </Box>
  );
};

export default SearchUserForm;
