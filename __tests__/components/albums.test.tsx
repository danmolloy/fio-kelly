import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Albums, { albumsArr } from "../../components/albums";

describe("<Albums />", () => {
  beforeEach(() => {
    render(<Albums />);
  });
  it("albums-section is in the document", () => {
    const albumsSection = screen.getByTestId("albums-section");
    expect(albumsSection).toBeInTheDocument();
  });
  it("index-section is in the document with expected title", () => {
    const indexSection = screen.getByTestId("index-section");
    expect(indexSection).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const albumsSection = screen.getByTestId("albums-section");
    expect(albumsSection).toMatchSnapshot();
  });
  it("all albums are in the document with image and link", () => {
    const links = screen.getAllByRole("link", { name: /listen on spotify/i });
    expect(links.length).toBe(albumsArr.length);

    for (let i = 0; i < albumsArr.length; i++) {
      expect(links[i]).toHaveAttribute("href", albumsArr[i].link);
      const albumImg = screen.getByAltText(
        `Album cover of ${albumsArr[i].title} by ${albumsArr[i].artists}`,
      );
      expect(albumImg).toBeInTheDocument();
      expect(albumImg).toHaveAttribute("src");
      expect(albumImg).toHaveAttribute("title", albumsArr[i].title);
    }
  });
});
