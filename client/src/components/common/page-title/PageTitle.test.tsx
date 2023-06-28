import { render, screen } from "@testing-library/react";

import PageTitle from ".";

it("Should render PageTitle", () => {
  const titleText = "Page Title";

  render(<PageTitle>{titleText}</PageTitle>);

  const element = screen.getByText(titleText);

  expect(element).toBeInTheDocument();
});
