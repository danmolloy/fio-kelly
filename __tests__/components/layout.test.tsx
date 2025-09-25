import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Layout from "../../components/layout";

describe("<Layout />", () => {
  beforeEach(() => {
    render(
      <Layout>
        <div data-testid="mock-children"></div>
      </Layout>
    );
  });
  it("layout-div is in the document", () => {
    const layout = screen.getByTestId("layout-div");
    expect(layout).toBeInTheDocument();
  });
  it("<Header /> is in the document", () => {
    const header = screen.getByTestId("page-header");
    expect(header).toBeInTheDocument();
  });
  it("<Menu /> renders on menuIcon click", () => {
    const menuIcon = screen.getByTestId("menu-icon");
    act(() => {
      fireEvent.click(menuIcon);
    });
    const menuDiv = screen.getByTestId("menu-div");
    expect(menuDiv).toBeInTheDocument();
  });
  it("{children} is in the document", () => {
    const mockChildren = screen.getByTestId("mock-children");
    expect(mockChildren).toBeInTheDocument();
  });
  it("<Footer /> is in the document", () => {
    const footerSection = screen.getByTestId("footer-section");
    expect(footerSection).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const layout = screen.getByTestId("layout-div");
    expect(layout).toMatchSnapshot();
  });
});
