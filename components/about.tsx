import React, { useEffect, useRef } from "react";
import IndexSection from "./indexSection";
import Image from "next/image";
import { motion } from "framer-motion";

const paragraphs = [
  "Irish flautist Fiona Kelly has been hailed by the New York Times as a player with “impressive technique and elegant musicianship”.",
  "Based in London, Fiona is in demand as an orchestral and chamber musician. She leads a busy freelance career performing as guest principal flute with many of the UK’s leading orchestras including the London Philharmonic Orchestra, the Philharmonia, Royal Philharmonic Orchestra, the Academy of St Martin in the Fields and the Orchestra of the Royal Opera House, Covent Garden amongst others.",
  "Solo and chamber music engagements have led to collaborations with ensembles and artists including the Wigmore Soloists, Antje Weithaas, Uri Caine and Håkan Hardenberger. Fiona has performed concertos at the BBC Proms, Rheingau and Heidelberg festivals. With a keen interest in new music, Fiona has premiered and recorded new works by Uri Caine, Stephan Mackey and Ian Wilson.",
  "Fiona has a duo with her harpist sister Jean Kelly. They have performed recitals and concertos throughout the U.K. and Ireland. A recent highlight was a recital at the National Concert Hall Chamber Music Series: The Natural World, with a programme titled “Toward the Sea”. The Kelly Sisters often perform works and arrangements of Irish music by their grandfather, composer T.C Kelly.",
  "Fiona enjoys regularly returning home to Ireland to the Irish Chamber Orchestra, where she is guest principal flute. Before relocating to London, Fiona was principal flute of the Swedish Chamber Orchestra from 2012-2016.",
  "Beginning her studies in Cork with her mother Evelyn Grant and Sabine Ducrot, Fiona went on to complete her studies at Trinity Laban Conservatoire with Anna Noakes, and at The Juilliard School with Robert Langevin.",
  "Fiona is a flute professor and currently Interim Head of Woodwind at Trinity Laban Conservatoire. She also gives masterclasses at music departments and colleges throughout the UK and Ireland.",
];

export default function AboutSection() {
  return (
    <IndexSection title={"About"} classNames=" bg-white">
      <div
        data-testid="about-section"
        className=" w-full h-full  flex flex-row "
      >
        <article className="text-black text-base tracking-wider lg:w-2/3 font-sans">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className="my-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
        </article>
        <div className="hidden lg:inline mx-8">
          <Image
            alt="Grayscale silhouette of Fiona holding her flute"
            width="363"
            height="429"
            src="/images/fk-bw-flute.jpg"
          />
        </div>
      </div>
    </IndexSection>
  );
}
