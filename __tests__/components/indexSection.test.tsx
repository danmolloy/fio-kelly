import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import IndexSection, { IndexSectionProps } from "../../components/indexSection";

const mockProps: IndexSectionProps = {
  children: <div></div>,
  title: "Lorem Ipsum",
  classNames: null,
};

describe("<IndexSection />", () => {
  beforeEach(() => {
    render(<IndexSection {...mockProps} />);
  });
  it("index-section is in the document", () => {
    const indexSection = screen.getByTestId("index-section");
    expect(indexSection).toBeInTheDocument();
  });
  it("title is in the document", () => {
    const title = screen.getByText(mockProps.title);
    expect(title).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const indexSection = screen.getByTestId("index-section");
    expect(indexSection).toMatchSnapshot();
  });
});
