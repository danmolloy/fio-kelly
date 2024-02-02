import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import Header, { HeaderProps, menuItems } from "../../components/header"
import "react-scroll"
import { Link, animateScroll } from "react-scroll";

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  },
  Link: (props) => <div></div>
}))


const mockProps: HeaderProps = {
  showMenu: false,
  showHeader: true,
  setShowHeader: jest.fn(),
  setShowMenu: jest.fn(),
}

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
  })
  it("page-header is in the document", () => {
    const pageHeader = screen.getByTestId("page-header")
    expect(pageHeader).toBeInTheDocument()
  })
  it("'Fiona Kelly' title is in the document", () => {
    const titleText = screen.getByText("Fiona Kelly")
    expect(titleText).toBeInTheDocument()
  })
  it("'Home' button is in the document and calls scrollToTop on click", async () => {
    const homeBtn = screen.getByText("Home")
    expect(homeBtn).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(homeBtn)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
      smooth: true, 
      duration: 500
    })
  })
  it("<MenuIcon /> is in the document", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const pageHeader = screen.getByTestId("page-header")
    expect(pageHeader).toMatchSnapshot()
  })
  //it("all menu buttons are in the document and calls scroll on click", () => {})
})