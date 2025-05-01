import Image from "next/image";
import React, { useEffect, useState } from "react";
import HalfSpeedScroll from "./halfScroll";

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 300;      // start fading immediately
      const fadeEnd = 500;      // fully black after 300px scroll
      const newOpacity = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section data-testid="hero-section" className=" w-screen h-screen flex flex-col justify-center overflow-hidden items-center">
      
      <div className="hidden md:flex z-10  flex-col absolute top-36  md:right-24">
        <h1 className=" text-zinc-200 text-5xl  font-display">Fiona Kelly</h1>
      </div>
      <div className="overflow-hidden w-[925px] md:w-screen -ml-28 sm:-ml-0 -mt-0 lg:-mt-56 h-screen md:h-[1477px] mx-auto outline">
      <HalfSpeedScroll>
      <div
        className="fixed inset-0  bg-black pointer-events-none"
        style={{ opacity }}
      />
        <Image title="Portrait of Fiona lounging on a couch with her flute." alt="Portrait of Fiona lounging on a couch with her flute." src="/images/fiona-chaise.jpg"  width={3700/2} height={2954/2} sizes=""  /> 
      </HalfSpeedScroll>
      </div>
    </section>
  )
}