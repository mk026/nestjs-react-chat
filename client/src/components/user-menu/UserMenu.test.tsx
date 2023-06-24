import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UserMenu from ".";

it("Should render UserMenu", () => {
  const profileButtonText = "My Profile";
  const roomsButtonText = "My Rooms";
  const signoutButtonText = "Signout";

  render(
    <MemoryRouter>
      <UserMenu />
    </MemoryRouter>
  );

  const profileButton = screen.getByText(profileButtonText);
  const roomsButton = screen.getByText(roomsButtonText);
  const signoutButton = screen.getByText(signoutButtonText);

  expect(profileButton).toBeInTheDocument();
  expect(roomsButton).toBeInTheDocument();
  expect(signoutButton).toBeInTheDocument();
});
