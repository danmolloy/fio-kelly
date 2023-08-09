import Image from 'next/image'
import Layout from '../components/layout'
import React from 'react'
import HeroSection from '../components/hero'
import AboutSection from '../components/about'
import Albums from '../components/albums'
import VideosSection from '../components/videos'
import Gallery from '../components/gallery'
import ContactSection from '../components/contactSection'
import { Element } from "react-scroll"

export default function Home() {

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <Albums />
      {/* <VideosSection /> */}
      <Gallery />
      <ContactSection />
    </Layout>
  )
}

