import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Menu, { MenuProps } from "../../components/menu";
import { menuItems } from "../../components/header";
import { Link, animateScroll as scroll } from "react-scroll";

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
  Link: (props) => <div>{props.children}</div>,
}));

const mockProps: MenuProps = {
  setShowHeader: jest.fn(),
  setShowMenu: jest.fn(),
  showMenu: true,
};

describe("<Menu />", () => {
  beforeEach(() => {
    render(<Menu {...mockProps} />);
  });

  it("menu-div is in the document", () => {
    const menuDiv = screen.getByTestId("menu-div");
    expect(menuDiv).toBeInTheDocument();
  });
  it("menuItems are in the document & call setShowMenu(false) on click", () => {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = screen.getByText(menuItems[i].title);
      expect(menuItem).toBeInTheDocument();
    }
  });

  it("matches snapshot", () => {
    const menuDiv = screen.getByTestId("menu-div");
    expect(menuDiv).toMatchSnapshot();
  });
});
