import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("displays the logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoLink = screen.getByText("Politician Dictionary");
    expect(logoLink).toBeInTheDocument();
  });

  test("displays navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const politiciansLink = screen.getByText("Politicians");
    const congressLink = screen.getByText("Congress");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");

    expect(politiciansLink).toBeInTheDocument();
    expect(congressLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    const congressLinkTo = screen.getByTestId("congress-link");
    expect(congressLinkTo.getAttribute("href")).toBe("/congress");
  });
});
