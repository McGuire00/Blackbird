import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders correctly", () => {
    render(<Footer />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("displays About Us section", () => {
    render(<Footer />);

    const aboutUsSection = screen.getByText("About Us");
    expect(aboutUsSection).toBeInTheDocument();
  });

  test("displays Quick Links section", () => {
    render(<Footer />);

    const quickLinksSection = screen.getByText("Quick Links");
    expect(quickLinksSection).toBeInTheDocument();

    const homeLink = screen.getByText("Home");
    const servicesLink = screen.getByText("Services");
    const portfolioLink = screen.getByText("Portfolio");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("displays Contact Us section", () => {
    render(<Footer />);

    const contactUsSection = screen.getByText("Contact Us");
    expect(contactUsSection).toBeInTheDocument();

    // Use a custom text matcher function to locate the elements based on their content
    const contactInfo = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes("Address:") &&
        content.includes("Email:") &&
        content.includes("Phone:")
      );
    });

    expect(contactInfo).toBeInTheDocument();
  });

  test("displays copyright information", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      "© 2023 Your Website Name. All rights reserved.",
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
