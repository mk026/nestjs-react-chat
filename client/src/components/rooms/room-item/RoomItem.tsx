import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { IRoom } from "../../../models/IRoom";
import { Paths } from "../../../routes";

interface RoomItemProps {
  room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({ room }) => {
  return (
    <Card>
      <Typography variant="h6">{room.title}</Typography>
      <Typography variant="body1">{room.description}</Typography>
      <Button component={Link} to={`${Paths.ROOMS}/${room.id}`}>
        Join
      </Button>
    </Card>
  );
};

export default RoomItem;
