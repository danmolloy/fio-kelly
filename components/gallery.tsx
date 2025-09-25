import Image from "next/image";
import IndexSection from "./indexSection";
import HalfSpeedScroll from "./halfScroll";
import GalleryScroll from "./galleryScroll";

export const galleryPics: {
  src: string;
  width: number;
  height: number;
  alt: string;
  smScreenOnly?: boolean;
}[] = [
  {
    src: "/images/Fiona-arms-crossed.jpg",
    width: 680,
    height: 540,
    alt: "Fiona with flute arms crossed",
  },
  {
    src: "/images/fiona-close-up-bw.jpg",
    width: 565,
    height: 750,
    alt: "Fiona with flute close up black and white",
  },
  {
    src: "/images/fiona-flute-table.jpg",
    width: 580,
    height: 580,
    alt: "Fiona with flute arms crossed",
  },
  {
    src: "/images/fiona-profile.jpg",
    alt: "Fiona profile photo with flute",
    width: 650 * 0.8,
    height: 850 * 0.8,
    smScreenOnly: true,
  },
  {
    alt: "Fiona with flute black and white",
    width: 726 * 0.8,
    height: 858 * 0.8,
    src: "/images/fk-bw-flute.jpg",
    smScreenOnly: true,
  },
  {
    src: "/images/fiona-close-table.jpg",
    width: 680,
    height: 480,
    alt: "Fiona close up at table with flute",
  },
];

export default function Gallery() {
  return (
    <IndexSection title="Gallery">
      <div
        data-testid="gallery-section"
        className="relative w-full flex flex-col lg:flex-row flex-wrap items-center justify-center"
      >
        {galleryPics.map((i) => (
          <div
            key={i.src}
            className={
              i.smScreenOnly
                ? "m-2 my-12 lg:hidden  overflow-hidden"
                : "m-2 my-12  overflow-hidden"
            }
          >
            <GalleryScroll>
              <Image
                className=" "
                src={i.src}
                width={i.width / 2}
                height={i.height / 2}
                alt={i.alt}
                data-testid={i.src}
              />
            </GalleryScroll>
          </div>
        ))}
      </div>
    </IndexSection>
  );
}
