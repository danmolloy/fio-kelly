import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "../../components/footer";
import "react-scroll"
import { animateScroll } from "react-scroll";

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  }
}))

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />)
  })
  it("footer-section is in the document", () => {
    const footer = screen.getByTestId("footer-section")
    expect(footer).toBeInTheDocument()
  })
  it("twitter link is in the document with expected href", () => {
    const twitterLink = screen.getByTitle("Link to Fiona's Twitter page")
    expect(twitterLink).toBeInTheDocument()
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/fizzlekelly")
  })
  it("'Back to top' btn is in the document and calls scrollToTop on click", async () => {
    const backToTop = screen.getByText("Back to top")
    expect(backToTop).toBeInTheDocument()
    await act(async() => {
      await fireEvent.click(backToTop)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
      smooth: true, 
      duration: 750
    })
  })
  it("'Purple Rasberry Photography' link is in the document with expected href", () => {
    const photographerLink = screen.getByText("Purple Rasberry Photography")
    expect(photographerLink).toBeInTheDocument()
    expect(photographerLink).toHaveAttribute("href", "https://www.purpleraspberry.uk/")
    expect(photographerLink).toHaveAttribute("target", "_blank")
  })
  it("matches snapshot", () => {
    const footer = screen.getByTestId("footer-section")
    expect(footer).toMatchSnapshot()
  })
})