import { render, screen } from "@testing-library/react";

import AppInfo from ".";

it("Should render AppInfo", () => {
  const infoText = "Welcome to NestJS/React Websocket Chat App";

  render(<AppInfo />);

  const element = screen.getByText(infoText);

  expect(element).toBeInTheDocument();
});
