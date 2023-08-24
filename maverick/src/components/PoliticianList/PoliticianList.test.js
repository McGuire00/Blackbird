import React from "react";
import { render, screen } from "@testing-library/react";
import PoliticianList from "./PoliticianList";

describe("PoliticianList component", () => {
  const mockFilterOptions = {
    Party: ["Democratic"],
    State: ["California"],
    Chamber: ["Senate"],
  };

  const mockPeople = {
    members: [
      {
        chamber: "Senate",
        position: "Senator",
        name: "Tammy Baldwin",
        state: "Wisconsin",
        party: "Democratic",
        image: "Tammy_Baldwin.jpg",
      },
      {
        position: "Senator",
        name: "John Barrasso",
        state: "Wyoming",
        party: "Republican",
        image: "John_Barrasso.jpg",
      },
    ],
  };

  test("renders filtered politicians correctly", () => {
    render(
      <PoliticianList people={mockPeople} filterOptions={mockFilterOptions} />,
    );

    const politicianElement1 = screen.getByText("Tammy Baldwin");
    expect(politicianElement1).toBeInTheDocument();
  });

  test("renders 'No results' message when no filtered members are present", () => {
    const emptyFilterOptions = {
      Party: [],
      State: ["Alabama"],
      Chamber: [],
    };

    render(
      <PoliticianList people={mockPeople} filterOptions={emptyFilterOptions} />,
    );

    const noResultsElement = screen.getByText(
      "No results found for the selected filters.",
    );
    expect(noResultsElement).toBeInTheDocument();
  });
  test("renders only politicians from the selected party", () => {
    const filterOptions = {
      Party: ["Republican"],
      State: [],
      Chamber: [],
    };

    render(
      <PoliticianList people={mockPeople} filterOptions={filterOptions} />,
    );

    const democratPolitician = screen.queryByText("Tammy Baldwin");
    expect(democratPolitician).toBeNull();

    const republicanPolitician = screen.getByText("John Barrasso");
    expect(republicanPolitician).toBeInTheDocument();
  });

  test("renders only politicians from the selected state", () => {
    const filterOptions = {
      Party: [],
      State: ["Wisconsin"],
      Chamber: [],
    };

    render(
      <PoliticianList people={mockPeople} filterOptions={filterOptions} />,
    );

    const wisconsinPolitician = screen.getByText("Tammy Baldwin");
    expect(wisconsinPolitician).toBeInTheDocument();

    const wyomingPolitician = screen.queryByText("John Barrasso");
    expect(wyomingPolitician).toBeNull();
  });
  test("renders only politicians from the selected chamber", () => {
    const filterOptions = {
      Party: [],
      State: [],
      Chamber: ["Senate"],
    };

    render(
      <PoliticianList people={mockPeople} filterOptions={filterOptions} />,
    );

    const senatePolitician = screen.getByText("Tammy Baldwin");
    expect(senatePolitician).toBeInTheDocument();
  });
});
