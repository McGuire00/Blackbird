import React from "react";
import { render, screen } from "@testing-library/react";
import Congress from "./Congress";

describe("Congress component", () => {
  test("renders correctly", () => {
    render(<Congress />);

    const congressElement = screen.getByTestId("congress");
    expect(congressElement).toBeInTheDocument();
  });

  test("renders CongressSideBar and PoliticianList components", () => {
    render(<Congress />);

    const congressSideBarElement = screen.getByTestId("congress-side-bar");
    const politicianListElement = screen.getByTestId("politician-list");

    expect(congressSideBarElement).toBeInTheDocument();
    expect(politicianListElement).toBeInTheDocument();
  });
});
