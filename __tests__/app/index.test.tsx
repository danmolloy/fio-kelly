import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import Home from "../../app/page"

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("<Layout /> is in the document", () => {
    const layout = screen.getByTestId("layout-div")
    expect(layout).toBeInTheDocument()
  })
  it("<HeroSection is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toBeInTheDocument()
  })
  it("<AboutSection /> is in the document", () => {
    const aboutSection = screen.getByTestId("about-section")
    expect(aboutSection).toBeInTheDocument()
  })
  it("<Albums /> is in the document", () => {
    const albumsSection = screen.getByTestId("albums-section")
    expect(albumsSection).toBeInTheDocument()
  })
  it("<Gallery /> is in the document", () => {
    const gallerySection = screen.getByTestId("gallery-section")
    expect(gallerySection).toBeInTheDocument()
  })
  it("<ContactSection /> is in the document", () => {
    const contactSection = screen.getByTestId("contact-form")
    expect(contactSection).toBeInTheDocument()
  })
  it("shows menu on icon click", () => {
    const menuIcon = screen.getByTestId('menu-icon')
    act(() => {
      fireEvent.click(menuIcon)
    })
    const menuDiv = screen.getByTestId("menu-div")
    expect(menuDiv).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const homePage = screen.getByTestId("layout-div")
    expect(homePage).toMatchSnapshot()
  })
})