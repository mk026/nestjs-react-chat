import { render, screen } from "@testing-library/react";

import MessageItem from ".";
import { IMessage } from "../../../models/message";
import { IUser } from "../../../models/user";

it("Should render MessageItem", () => {
  const fakeUser: IUser = {
    id: 1,
    avatarUrl: "",
    email: "test@test.com",
    name: "user",
    bio: "bio",
  };
  const fakeMessage: IMessage = {
    id: 1,
    content: "message",
    owner: fakeUser,
    roomId: 1,
  };

  render(<MessageItem message={fakeMessage} />);

  const element = screen.getByText(fakeMessage.content);

  expect(element).toBeInTheDocument();
});
