import { FC } from "react";
import { Box } from "@mui/material";

import AddRoomForm from "../../components/forms/add-room-form";
import PageTitle from "../../components/page-title";

const AddRoomPage: FC = () => {
  return (
    <Box>
      <PageTitle>Add new room</PageTitle>
      <AddRoomForm />
    </Box>
  );
};

export default AddRoomPage;
