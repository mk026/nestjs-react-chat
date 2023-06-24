import { render, screen } from "@testing-library/react";

import UserMenuButton from ".";

it("Should render UserMenuButton", () => {
  const onClick = () => {};
  const name = "username";

  render(<UserMenuButton onClick={onClick} name={name} />);

  const element = screen.getByText(name);

  expect(element).toBeInTheDocument();
});
