import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Gallery, { galleryPics } from "../../components/gallery"

describe("<Gallery />", () => {
  beforeEach(() => {
    render(<Gallery />)
  })
  it("gallery-section is in the document", () => {
    const gallery = screen.getByTestId("gallery-section")
    expect(gallery).toBeInTheDocument()
  })
  it("<IndexSection /> is in the document with 'Gallery' title text", () => {
    const indexSection = screen.getByTestId("index-section")
    expect(indexSection).toBeInTheDocument()
    expect(indexSection.textContent).toMatch("Gallery")
  })
  it("all gallery images are in the document", () => {
    for (let i = 0; i < galleryPics.length; i ++) {
      const galleryPic = screen.getByTestId(galleryPics[i].src)
      expect(galleryPic).toBeInTheDocument()
      expect(galleryPic).toHaveAttribute("src")
      expect(galleryPic).toHaveAttribute("alt", galleryPics[i].alt)
    }
  })
  it("matches snapshot", () => {
    const gallery = screen.getByTestId("gallery-section")
    expect(gallery).toMatchSnapshot()
  })
})