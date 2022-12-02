import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import RoomControls from "../room-controls/RoomControls";
import RoomMembers from "../room-members/RoomMembers";
import { IRoom } from "../../../models/IRoom";

import classes from "./RoomHeader.module.scss";

interface RoomHeaderProps {
  room: IRoom;
}

const RoomHeader: FC<RoomHeaderProps> = ({ room }) => {
  return (
    <Stack direction="row" className={classes["room-header"]}>
      <Typography>{room.title}</Typography>
      <RoomMembers />
      <RoomControls />
    </Stack>
  );
};

export default RoomHeader;
