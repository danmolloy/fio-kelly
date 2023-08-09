import Image from "next/image";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="w-screen fixed top-0 mt-8"  >
      <Image alt="Fiona with Flute" src="/images/fk-bw-flute.jpg" width={3485} height={4091}/>
      </div>
      <div className="p-4 w-screen sm:w-2/3 bg-white z-10 mt-96 opacity-80 text-xl sm:mb-24">
        <h1 className="py-2 text-3xl">About</h1>
        <p>Irish flautist Fiona Kelly has been hailed by the New York Times as a player with <a href="www.nytimes.com/2010/01/25/arts/music/25focus.html">“impressive technique and elegant musicianship”</a>. </p>
        <br />
        <p>Based in London, Fiona is in demand as an orchestral and chamber musician. She leads a busy freelance career performing as guest principal flute with many of the UK&apos;s leading orchestras including the Academy of St Martin in the Fields, London Philharmonic, the Philharmonia, Royal Philharmonic, BBC Symphony and the Royal Opera House, Covent Garden amongst others, and chamber ensembles such as the Wigmore Soloists. She enjoys regularly returning home to Ireland to the Irish Chamber Orchestra, where she is principal flute. </p>
        <br />
        <p>Before relocating to London, Fiona was principal flute of the Swedish Chamber Orchestra from 2012-2016. As a soloist Fiona has performed at the BBC Proms, Rheingau and Heidelberg festivals. </p>
        <br/>
        <p className="mb-12">Beginning her studies in Cork with her mother Evelyn Grant and Sabine Ducrot, Fiona went on to complete her studies at Trinity Laban Conservatoire with Anna Noakes, and at The Juilliard School with Robert Langevin. Fiona is a flute professor at Trinity Laban Conservatoire. </p>

    </div>
    </Layout>
  )
}