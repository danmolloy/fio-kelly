import Head from "next/head"
import { useState, useEffect } from "react"
import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"

export default function Layout({ children}) {
  const [showMenu, setShowMenu] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  

  return (
    <div >
      <Head>
        <title>Fiona Kelly Flute</title>
        <meta 
          name="description" 
          content='Fiona Kelly is a freelance flautist based in London. She has been hailed by the New York Times as a player with “impressive technique and elegant musicianship".' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showHeader={showHeader} setShowHeader={(arg) => setShowHeader(arg)} setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu} />
      {showMenu && <Menu setShowHeader={(arg) => setShowHeader(arg)} showMenu={showMenu} setShowMenu={(arg) => setShowMenu(arg)}/>}
      <div className={showMenu ? "blur" : ""}>
        {children}
      </div>
      <Footer />
    </div>
  )
};