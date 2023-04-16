import { render, screen } from "@testing-library/react";

import RoomControls from ".";

it("Should render RoomControls", () => {
  const leaveButtonText = "Leave";
  const editButtonText = "Edit";

  render(<RoomControls />);

  const leaveButton = screen.getByText(leaveButtonText);
  const editButton = screen.getByText(editButtonText);

  expect(leaveButton).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
});
