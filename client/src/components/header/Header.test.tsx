import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import { store } from "../../store";

it("Should render Header", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

  const header = screen.getByTestId("header");

  expect(header).toBeInTheDocument();
});
