import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCardGroup from "./ImageCardGroup";

describe("ImageCardGroup component", () => {
  const cabinetMembers = {
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
  };

  test("renders ImageCard components with correct props", () => {
    render(<ImageCardGroup cabinetMembers={cabinetMembers} />);

    const member1Image = screen.getByAltText("Joe Biden");
    const member1Name = screen.getByText("Joe Biden");
    const member1Position = screen.getByText("President");

    const member2Image = screen.getByAltText("Kamala Harris");
    const member2Name = screen.getByText("Kamala Harris");
    const member2Position = screen.getByText("Vice President");

    expect(member1Image).toBeInTheDocument();
    expect(member1Name).toBeInTheDocument();
    expect(member1Position).toBeInTheDocument();

    expect(member2Image).toBeInTheDocument();
    expect(member2Name).toBeInTheDocument();
    expect(member2Position).toBeInTheDocument();
  });
});
