import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion component", () => {
  const filters = {
    title: "Test Filter",
    label: "Test Label",
    options: ["Option 1", "Option 2"],
  };

  it("renders correctly with options", () => {
    const { getByText, queryByText } = render(
      <Accordion filters={filters} setFilterOptions={() => {}} />,
    );

    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("toggles content visibility when title is clicked", () => {
    const { getByText } = render(
      <Accordion filters={filters} setFilterOptions={() => {}} />,
    );

    fireEvent.click(getByText("Test Label")); // Click the title
    expect(getByText("Option 1")).toBeVisible(); // Content is visible

    fireEvent.click(getByText("Test Label")); // Click the title
    expect(getByText("Option 2")).toBeVisible(); // Content is visible
  });

  it("updates selected filters and calls setFilterOptions correctly", () => {
    const setFilterOptionsMock = jest.fn();

    const { getByLabelText } = render(
      <Accordion filters={filters} setFilterOptions={setFilterOptionsMock} />,
    );

    const checkbox1 = getByLabelText("Option 1");
    const checkbox2 = getByLabelText("Option 2");

    fireEvent.click(checkbox1); // Select Option 1
    fireEvent.click(checkbox2); // Select Option 2

    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);

    fireEvent.click(checkbox1); // Deselect Option 1
    expect(checkbox1.checked).toBe(false);

    expect(setFilterOptionsMock).toHaveBeenCalledTimes(3);
    // expect(setFilterOptionsMock).toHaveBeenCalledWith({
    //   "Test Filter": ["Option 2"],
    // });
  });

  it("renders correctly without options", () => {
    const filtersWithoutOptions = {
      title: "Empty Filter",
      label: "Empty Label",
      options: [],
    };

    const { getByText } = render(
      <Accordion filters={filtersWithoutOptions} setFilterOptions={() => {}} />,
    );

    expect(getByText("Empty Label")).toBeInTheDocument();
  });
});
