import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SignupLink from ".";

it("Should render SignupLink", () => {
  const linkText = "Signup";

  render(
    <MemoryRouter>
      <SignupLink />
    </MemoryRouter>
  );

  const element = screen.getByText(linkText);

  expect(element).toBeInTheDocument();
});
