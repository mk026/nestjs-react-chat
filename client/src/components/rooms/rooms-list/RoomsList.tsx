import { FC } from "react";
import { Stack } from "@mui/material";

import { IRoom } from "../../../models/room";
import RoomItem from "../room-item";

interface RoomsListProps {
  rooms: IRoom[];
}

const RoomsList: FC<RoomsListProps> = ({ rooms }) => {
  return (
    <Stack>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </Stack>
  );
};

export default RoomsList;
