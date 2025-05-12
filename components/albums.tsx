import Image from "next/image";
import IndexSection from "./indexSection";
import Link from "next/link";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";


export const albumsArr: {
  title: string
  artists: string
  src: string
  link: string
}[] = [
  {
    title: "The Brandenburg Project",
    artists: "Swedish Chamber Orchestra & Thomas Dausgaard",
    src: "/albums/brandenburg-project.jpg",
    link: "https://open.spotify.com/album/1Qx8aCFUf8I9YSrD89266A?si=Q1Nx2khlT9miP5pvic00fw"
  },
  {
    title: "Folk Songs of the British Isles",
    artists: "Various, including Fiona Kelly & Jean Kelly",
    src: "/albums/folk-songs.jpg",
    link: "https://open.spotify.com/track/5ebx7aiNIlcj6iqnpnh69a?si=DLSo7nlNRSak0dIv6HpCKw"
  },
  {
    title: "Wild is the Wind",
    artists: "Ian Wilson",
    src: "/albums/wild-is-the-wind.jpg",
    link: "https://open.spotify.com/track/2DVIuwdVqu1BQVaODk6tQI?si=Hh1FaK9wSdqFJI__1GKLzA"
  },
  {
    title: "Symphony No. 5: Prokofiev",
    artists: "Santtu-Matias Rouvali & Philharmonia Orchestra",
    src: "/albums/prokofiev-symphoy-5.jpg",
    link: "https://open.spotify.com/album/4qm4iHBsCZul7hSFZQJ0nK?si=cYqWoWw9SZix9qDpz81Fkw"
  },
  {
    title: "A Midsummer Night's Dream",
    artists: "Swedish Chamber Orchestra & Thomas Dausgaard",
    src: "/albums/mendelssohn-midsummer.jpg",
    link: "https://open.spotify.com/album/5BFSaFyBhAifMNJo0HTw7Z?si=Yv3p3QkQTfKJ0hwanhVa7g"
  },
  {
    title: "Brahms Symphony No. 3",
    artists: "Swedish Chamber Orchestra & Thomas Dausgaard",
    src: "/albums/brahms-symphony-3.jpg",
    link: "https://open.spotify.com/track/7jZoI2PHAJzY9RdAiysul6?si=8u6CukG8RaOWpNUZReIkBw"
  },
  {
    title: "Brett Dean: Shadow Music",
    artists: "Swedish Chamber Orchestra & Brett Dean",
    src: "/albums/dean-swedish.jpg",
    link: "https://open.spotify.com/album/0FA63Lj197qGTdI1tQSX1n?si=J2sMyAdxTJOdbRAc2vypvA"
  },
  {
    title: "Mozart: Piano Concertos No. 19 & 27",
    artists: "Francesco Piemontesi, Andrew Manze & Scottish Chamber Orchestra",
    src: "/albums/mozart-piemontesi.jpg",
    link: "https://open.spotify.com/album/5ppe0nPr49exiRuTLW9zQ3?si=s59DWgcWRpCw5KglJqxIOw"
  },
]

export default function Albums() {
  const [selected, setSelected] = useState<number|null>(null)

  return (
    <IndexSection title={"Listen"} classNames={/* selected !== null ? `bg-zinc-200 ease-in-out duration-500 transform` :  */`ease-in-out duration-500 transform bg-gradient-to-b from-zinc-100 to-zinc-100 via-zinc-50`}>
      <div data-testid="albums-section" className=" w-full flex flex-row flex-wrap items-start justify-evenly">
        {albumsArr.map((i, index) => (
          <div  key={i.src} onMouseEnter={() => setSelected(index)} onMouseLeave={() => setSelected(null)} className={` m-1 mx-3 flex flex-col items-center  justify-center `} >


            <Image onClick={() => setSelected(selected === index ? null : index)} className={`shadow-2xl  ${selected !== null && selected !== index && 'bg-zinc-100 opacity-0  ease-in-out duration-500 transform'} self-start ease-in-out duration-500 transform `} src={i.src} width={250} height={250} alt={`Album cover of ${i.title} by ${i.artists}`} title={i.title}/>
            <div className={`${selected === index ? "opacity-100 " : "opacity-0 "} self-start max-w-[250px] p-1`}>
              <p className="flex flex-wrap font-semibold text-base">
                {i.title}
              </p>
              <p className="flex flex-wrap">
                {i.artists}
              </p>
              <Link href={i.link} className="flex flex-row items-center hover:underline">
              <FaSpotify />
              <p className="ml-1">Listen on Spotify</p>
              
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </IndexSection>
  )
}

{/* <Link data-testid={`${i.link}-link`} target="_blank" href={i.link} className=" " key={i.src}>
          <Image className="shadow-2xl m-4 hover:shadow-zinc-400 active:shadow-zinc-300" src={i.src} width={250} height={250} alt={`Album cover of ${i.title} by ${i.artists}`} title={i.title}/>
        </Link> */}