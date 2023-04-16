import { render, screen } from "@testing-library/react";

import RoomMembers from ".";
import { IUser } from "../../../models/user";

it("Should render RoomMembers", () => {
  const fakeUsers: IUser[] = [
    {
      id: 1,
      avatarUrl: "",
      email: "test@test.com",
      name: "user 1",
      bio: "bio",
    },
    {
      id: 1,
      avatarUrl: "",
      email: "test@test.com",
      name: "user 2",
      bio: "bio",
    },
  ];
  render(<RoomMembers members={fakeUsers} />);

  const element = screen.getByText("RoomMembers");

  expect(element).toBeInTheDocument();
});
