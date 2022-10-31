import { FC } from "react";
import { Stack } from "@mui/material";

import { IRoom } from "../../../models/IRoom";
import RoomItem from "../room-item/RoomItem";

interface RoomsListProps {
  rooms: IRoom[];
}

const RoomsList: FC<RoomsListProps> = ({ rooms }) => {
  return (
    <Stack>
      {rooms.map((room) => (
        <RoomItem room={room} />
      ))}
    </Stack>
  );
};

export default RoomsList;
