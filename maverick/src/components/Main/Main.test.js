import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

// Mock the cabinet data
jest.mock("../../util/cabinet.json", () => ({
  cabinet: [
    {
      0: {
        position: "President",
        name: "Joe Biden",
        image: "PJoeBiden.webp",
      },
    },
    {
      1: {
        position: "Vice President",
        name: "Kamala Harris",
        image: "VPKamalaHarris.webp",
      },
    },
  ],
}));

describe("Main component", () => {
  test("renders the ImageCardGroup with cabinet members", () => {
    render(<Main />);
    const presidentCard = screen.getByText("Joe Biden");
    const vicePresidentCard = screen.getByText("Kamala Harris");

    expect(presidentCard).toBeInTheDocument();
    expect(vicePresidentCard).toBeInTheDocument();
  });
});
