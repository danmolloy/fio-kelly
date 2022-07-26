import Head from "next/head"
import { useState } from "react"
import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"

export default function Layout({home, children}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={home ? "home-layout" : "layout"}>
      <Head>
      <title>Fiona Kelly Flute</title>
        <meta name="description" content="Fiona Kelly Flute London | Ireland" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu} home={home}/>
      {showMenu && <Menu showMenu={() => setShowMenu(false)}/>}
      <div className={home ? "home-page" : "main"}>
        {children}
      </div>
      {!home && <Footer />}
    </div>
  )
};