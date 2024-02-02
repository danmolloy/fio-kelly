import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Albums, { albumsArr } from "../../components/albums"

describe("<Albums />", () => {
  beforeEach(() => {
    render(<Albums />)
  })
  it("albums-section is in the document", () => {
    const albumsSection = screen.getByTestId("albums-section")
    expect(albumsSection).toBeInTheDocument()
  })
  it("index-section is in the document with expected title", () => {
    const indexSection = screen.getByTestId("index-section")
    expect(indexSection).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const albumsSection = screen.getByTestId("albums-section")
    expect(albumsSection).toMatchSnapshot()
  })
  it("all albums are in the document with image and link", () => {
    for (let i = 0; i < albumsArr.length; i ++) {
      const albumLink = screen.getByTestId(`${albumsArr[i].link}-link`)
      expect(albumLink).toBeInTheDocument()
      expect(albumLink).toHaveAttribute("href", `${albumsArr[i].link}`)
      expect(albumLink).toHaveAttribute("target", "_blank")
      const albumImg = screen.getByAltText(`Album cover of ${albumsArr[i].title} by ${albumsArr[i].artists}`)
      expect(albumImg).toBeInTheDocument()
      expect(albumImg).toHaveAttribute("src") //src link is not tested
      expect(albumImg).toHaveAttribute("title", `${albumsArr[i].title}`)
    }
  })
})