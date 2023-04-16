import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AppTitle from ".";

it("Should render AppTitle", () => {
  const titleText = "React Chat";

  render(
    <MemoryRouter>
      <AppTitle />
    </MemoryRouter>
  );

  const element = screen.getByText(titleText);

  expect(element).toBeInTheDocument();
});
