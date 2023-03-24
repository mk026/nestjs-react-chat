import { render, screen } from "@testing-library/react";

import UserInfo from ".";
import { IUser } from "../../models/user";

it("Should render UserInfo", () => {
  const fakeUser: IUser = {
    id: 1,
    avatarUrl: "",
    email: "test@test.com",
    name: "user",
    bio: "bio",
  };

  render(<UserInfo user={fakeUser} />);

  const element = screen.getByText(fakeUser.name);

  expect(element).toBeInTheDocument();
});
