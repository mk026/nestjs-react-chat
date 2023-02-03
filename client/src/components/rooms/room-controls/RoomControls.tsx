import { Button, Stack } from "@mui/material";
import { FC } from "react";

const RoomControls: FC = () => {
  return (
    <Stack direction="row">
      <Button>Leave</Button>
      <Button>Edit</Button>
    </Stack>
  );
};

export default RoomControls;
