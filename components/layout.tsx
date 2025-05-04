import Head from "next/head"
import { useState } from "react"
import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"

export default function Layout({ children}) {
  const [showMenu, setShowMenu] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  

  return (
    <div data-testid="layout-div">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showHeader={showHeader} setShowHeader={(arg) => setShowHeader(arg)} setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu} />
      <Menu setShowHeader={(arg) => setShowHeader(arg)} showMenu={showMenu} setShowMenu={(arg) => setShowMenu(arg)}/>
      <div >
        {children}
      </div>
      <Footer />
    </div>
  )
};