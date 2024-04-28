import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section data-testid="hero-section" className=" w-screen h-screen flex flex-col justify-center overflow-hidden items-center">
      <div className="hidden md:flex z-10  flex-col absolute top-36  md:right-24">
        <h1 className=" text-zinc-200 text-5xl  font-display">Fiona Kelly</h1>
      </div>
      <div className="overflow-hidden w-[925px] md:w-screen -ml-28 sm:-ml-0 -mt-0 lg:-mt-56 h-screen md:h-[1477px] mx-auto outline">
        <Image title="Portrait of Fiona lounging on a couch with her flute." alt="Portrait of Fiona lounging on a couch with her flute." src="/images/fiona-chaise.jpg"  width={3700/2} height={2954/2} sizes=""  /> 
      </div>
    </section>
  )
}