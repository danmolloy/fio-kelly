'use client'

import Layout from '../components/layout'
import React from 'react'
import HeroSection from '../components/hero'
import AboutSection from '../components/about'
import Albums from '../components/albums'
import Gallery from '../components/gallery'
import ContactSection from '../components/contactSection'

export default function Home() {

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <Albums />
      <Gallery />
      <ContactSection />
    </Layout>
  )
}

