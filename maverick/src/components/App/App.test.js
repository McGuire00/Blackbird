import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  test("renders Header, Main, and Footer components", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("renders Congress component for the /congress route", () => {
    render(
      <MemoryRouter initialEntries={["/congress"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("congress")).toBeInTheDocument();
  });

  test("renders NotFound component for an unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByText("You have landed on a page that doesn't exist"),
    ).toBeInTheDocument();
  });
});
