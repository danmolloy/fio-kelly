import Image from "next/image";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="about-img">
      <Image src="/images/FK BW FLUTE BW 1.jpg" width={3485} height={4091}/>
      </div>
      <div className="about-body">
        <h1 className="page-title">About</h1>
        <p>Irish flautist Fiona Kelly has been hailed by the New York Times as a player with <a href="www.nytimes.com/2010/01/25/arts/music/25focus.html">“impressive technique and elegant musicianship”</a>. </p>
        <br />
        <p>Based in London, Fiona is in demand as an orchestral and chamber musician. She leads a busy freelance career performing as guest principal flute with many of the UK's leading orchestras including the Academy of St Martin in the Fields, London Philharmonic, the Philharmonia, Royal Philharmonic, BBC Symphony and the Royal Opera House, Covent Garden amongst others, and chamber ensembles such as the Wigmore Soloists. She enjoys regularly returning home to Ireland to the Irish Chamber Orchestra, where she is principal flute. </p>
        <br />
        <p>Before relocating to London, Fiona was principal flute of the Swedish Chamber Orchestra from 2012-2016. As a soloist Fiona has performed at the BBC Proms, Rheingau and Heidelberg festivals. </p>
        <br/>
        <p className="mb-12">Beginning her studies in Cork with her mother Evelyn Grant and Sabine Ducrot, Fiona went on to complete her studies at Trinity Laban Conservatoire with Anna Noakes, and at The Juilliard School with Robert Langevin. Fiona is a flute professor at Trinity Laban Conservatoire. </p>

    </div>
    </Layout>
  )
}