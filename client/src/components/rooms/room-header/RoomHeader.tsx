import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import RoomControls from "../room-controls/RoomControls";
import RoomMembers from "../room-members/RoomMembers";

import classes from "./RoomHeader.module.scss";

const RoomHeader: FC = () => {
  return (
    <Stack direction="row" className={classes["room-header"]}>
      <Typography>Room name</Typography>
      <RoomMembers />
      <RoomControls />
    </Stack>
  );
};

export default RoomHeader;
