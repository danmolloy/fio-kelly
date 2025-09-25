import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutSection from "../../components/about";
describe("<About />", () => {
  beforeEach(() => {
    render(<AboutSection />);
  });
  it("about-section is in the document", () => {
    const aboutSection = screen.getByTestId("about-section");
    expect(aboutSection).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const aboutSection = screen.getByTestId("about-section");
    expect(aboutSection).toMatchSnapshot();
  });
});
