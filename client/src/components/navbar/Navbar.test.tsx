import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navbar from ".";

it("Should render Navbar", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const navbar = screen.getByRole("navigation");

  expect(navbar).toBeInTheDocument();
});
