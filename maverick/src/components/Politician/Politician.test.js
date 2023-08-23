import React from "react";
import { render, screen } from "@testing-library/react";
import Politician from "./Politician";

describe("Politician component", () => {
  const politicianData = {
    position: "Senator",
    name: "John Doe",
    state: "California",
    party: "Democratic",
    imageUrl: "john_doe.jpg",
  };

  test("renders politician details correctly", () => {
    render(
      <Politician
        position={politicianData.position}
        name={politicianData.name}
        state={politicianData.state}
        party={politicianData.party}
        imageUrl={politicianData.imageUrl}
      />,
    );

    const nameElement = screen.getByText(politicianData.name);
    const positionElement = screen.getByText(
      `Position: ${politicianData.position}`,
    );
    const stateElement = screen.getByText(`State: ${politicianData.state}`);
    const partyElement = screen.getByText(`Party: ${politicianData.party}`);
    const imageElement = screen.getByAltText(politicianData.name);

    expect(nameElement).toBeInTheDocument();
    expect(positionElement).toBeInTheDocument();
    expect(stateElement).toBeInTheDocument();
    expect(partyElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toBe(politicianData.imageUrl);
  });
});
