import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";

describe("ImageCard component", () => {
  const imageUrl = "example.jpg";
  const name = "John Doe";
  const position = "Senator";

  test("renders with correct props", () => {
    render(<ImageCard imageUrl={imageUrl} name={name} position={position} />);

    const imgElement = screen.getByAltText(name);
    const nameElement = screen.getByText(name);
    const positionElement = screen.getByText(position);

    expect(imgElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(positionElement).toBeInTheDocument();
  });

  test("displays correct image", () => {
    render(<ImageCard imageUrl={imageUrl} name={name} position={position} />);

    const imgElement = screen.getByAltText(name);

    expect(imgElement).toHaveAttribute("src", imageUrl);
  });
});
