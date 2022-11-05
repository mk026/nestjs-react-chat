import { FC } from "react";
import SearchRoomForm from "../../components/forms/search-room-form/SearchRoomForm";
import RoomsList from "../../components/rooms/rooms-list/RoomsList";
import { useGetRoomsQuery } from "../../store/api/roomApi";

const RoomsPage: FC = () => {
  const { data } = useGetRoomsQuery();

  return (
    <div>
      <SearchRoomForm />
      <RoomsList rooms={data || []} />
    </div>
  );
};

export default RoomsPage;
