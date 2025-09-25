import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "../../components/hero";

describe("<HeroSection />", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });
  it("hero-section is in the document", () => {
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });
  it("'Fiona Kelly' title is in the document", () => {
    const title = screen.getByText("Fiona Kelly");
    expect(title).toBeInTheDocument();
  });
  it("portrait image is in the document", () => {
    const portraitImg = screen.getByTitle("Fiona Kelly");
    expect(portraitImg).toBeInTheDocument();
    expect(portraitImg).toHaveAttribute("alt", "Fiona Kelly");
  });
  it("matches snapshot", () => {
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toMatchSnapshot();
  });
});
