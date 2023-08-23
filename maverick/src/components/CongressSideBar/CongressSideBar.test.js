import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CongressSideBar from "./CongressSideBar";

describe("CongressSideBar component", () => {
  const mockSetFilterOptions = jest.fn();

  test("renders correctly", () => {
    render(<CongressSideBar setFilterOptions={mockSetFilterOptions} />);
    expect(screen.getByTestId("congress-side-bar")).toBeInTheDocument();
  });
});
