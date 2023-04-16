import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SigninLink from ".";

it("Should render SigninLink", () => {
  const linkText = "Signin";

  render(
    <MemoryRouter>
      <SigninLink />
    </MemoryRouter>
  );

  const element = screen.getByText(linkText);

  expect(element).toBeInTheDocument();
});
