import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  test("renders the correct message", () => {
    const { getByText } = render(<NotFound />);
    const message = getByText("You have landed on a page that doesn't exist");
    expect(message).toBeInTheDocument();
  });
});
