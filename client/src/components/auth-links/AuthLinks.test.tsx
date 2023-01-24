import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AuthLinks from ".";

it("Should render AuthLinks", () => {
  const signupButtonText = "Create Account";
  const signinButtonText = "Signin";

  render(
    <MemoryRouter>
      <AuthLinks />
    </MemoryRouter>
  );

  const signupButton = screen.getByText(signupButtonText);
  const signinButton = screen.getByText(signinButtonText);

  expect(signupButton).toBeInTheDocument();
  expect(signinButton).toBeInTheDocument();
});
