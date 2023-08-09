import React from "react";
import IndexSection from "./indexSection";
import Image from "next/image";
 

export default function AboutSection() {
  return (
    <IndexSection title={"About"}>
      <div className=" w-full h-full  flex flex-row">
      <article className="text-zinc-500 tracking-wider lg:w-2/3">
      <p className="my-2">
      Irish flautist Fiona Kelly has been hailed by the New York Times as a player with <a href="https://www.nytimes.com/2010/01/25/arts/music/25focus.html" target="_blank" className="hover:underline text-blue-500">“impressive technique and elegant musicianship”</a>.</p>
      <p className="my-2">
      Based in London, Fiona is in demand as an orchestral and chamber musician. She leads a busy freelance career performing as guest principal flute with many of the UK’s leading orchestras including the London Philharmonic Orchestra, the Philharmonia, Royal Philharmonic Orchestra, the Academy of St Martin in the Fields and the Orchestra of the Royal Opera House, Covent Garden amongst others. 
      </p>
      <p className="my-2">
      Solo and chamber music engagements have led to collaborations with ensembles and artists including the Wigmore Soloists, Antje Weithaas, Uri Caine and Håkan Hardenberger. Fiona has performed concertos at the BBC Proms, Rheingau and Heidelberg festivals. With a keen interest in new music, Fiona has premiered and recorded new works by Uri Caine, Stephan Mackey and Ian Wilson. 
      </p>
      <p className="my-2">
      Fiona has a duo with her harpist sister Jean Kelly. They have performed recitals and concertos throughout the U.K. and Ireland. A recent highlight was a recital at the National Concert Hall Chamber Music Series: The Natural World, with a programme titled “Toward the Sea” focussing on the politicising of our seas, climate change and the importance of nature. The Kelly Sisters often perform works and arrangements of Irish music by their grandfather, composer T.C Kelly. 

      </p>
      <p className="my-2">
      Fiona enjoys regularly returning home to Ireland to the Irish Chamber Orchestra, where she is guest principal flute. Before relocating to London, Fiona was principal flute of the Swedish Chamber Orchestra from 2012-2016. 

      </p>
      <p className="my-2">
      Beginning her studies in Cork with her mother Evelyn Grant and Sabine Ducrot, Fiona went on to complete her studies at Trinity Laban Conservatoire with Anna Noakes, and at The Juilliard School with Robert Langevin. 

      </p>
      <p className="my-2">
      Fiona is a flute professor at Trinity Laban Conservatoire and gives masterclasses at music departments and colleges throughout the UK and Ireland. 

      </p>
      </article>
      <div className="hidden lg:inline mx-8">
        <Image alt="Fiona with flute black and white" width="363" height="429" src="/images/fk-bw-flute.jpg" />
      </div>
      </div>
    </IndexSection>
  )
}