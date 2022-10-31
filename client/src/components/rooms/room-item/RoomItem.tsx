import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IRoom } from "../../../models/IRoom";

interface RoomItemProps {
  room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({ room }) => {
  return (
    <Card>
      <Typography variant="h6">{room.title}</Typography>
      <Typography variant="body1">{room.description}</Typography>
    </Card>
  );
};

export default RoomItem;
