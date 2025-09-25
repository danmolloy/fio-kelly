import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MenuIcon, { MenuIconProps } from "../../components/menuIcon";

const mockProps: MenuIconProps = {
  setShowMenu: jest.fn(),
  showMenu: true,
};

describe("<MenuIcon />", () => {
  beforeEach(() => {
    render(<MenuIcon {...mockProps} />);
  });
  it("menu-icon is in the document", () => {
    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
  });
  it("calls setShowMenu on click", () => {
    const menuIcon = screen.getByTestId("menu-icon");
    act(() => {
      fireEvent.click(menuIcon);
    });
    expect(mockProps.setShowMenu).toHaveBeenCalled();
  });
  it("matches snapshot", () => {
    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toMatchSnapshot();
  });
});
