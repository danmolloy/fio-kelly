import Image from "next/image";
import IndexSection from "./indexSection";

const galleryPics: {src: string, width: number, height: number, alt: string}[] = [
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
  /* {
    src: "/images/fiona-behind-bw.jpg",
    width: 535,
    height: 745,
    alt: "Fiona from behind black and white",
  }, */
  {
    src: "/images/fiona-close-table.jpg",
    width: 680,
    height: 480,
    alt: "Fiona close up at table with flute",
  },
]

export default function Gallery() {
  return (
    <IndexSection title="Gallery">
      <div className=" w-full flex flex-col lg:flex-row flex-wrap items-center justify-center">
        {galleryPics.map(i => (
          <div key={i.src} className="m-2 shadow-xl">
            <Image src={i.src} width={i.width/2} height={i.height/2} alt={i.alt} />
          </div>
        ))}
      </div>
    </IndexSection>
  )
}