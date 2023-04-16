import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RoomHeader from ".";
import { IRoom } from "../../../models/room";
import { IUser } from "../../../models/user";

it("Should render RoomHeader", () => {
  const fakeUser: IUser = {
    id: 1,
    avatarUrl: "",
    email: "test@test.com",
    name: "user",
    bio: "bio",
  };
  const fakeRoom: IRoom = {
    id: 1,
    description: "room description",
    members: [],
    owner: fakeUser,
    title: "room title",
  };
  render(
    <MemoryRouter>
      <RoomHeader room={fakeRoom} />
    </MemoryRouter>
  );

  const element = screen.getByText(fakeRoom.title);

  expect(element).toBeInTheDocument();
});
