import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const AddMessageForm: FC = () => {
  return (
    <Box component="form">
      <TextField placeholder="Enter your message..." multiline />
      <Button>Send</Button>
    </Box>
  );
};

export default AddMessageForm;
