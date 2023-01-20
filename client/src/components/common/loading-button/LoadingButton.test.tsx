import { render, screen } from "@testing-library/react";

import LoadingButton from ".";

it("Should render LoadingButton", () => {
  const buttonText = "Submit";

  render(<LoadingButton isLoading={false}>{buttonText}</LoadingButton>);

  const element = screen.getByText(buttonText);

  expect(element).toBeInTheDocument();
});
