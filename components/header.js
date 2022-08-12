import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuIcon from './menuIcon'

export default function Header({showMenu, setShowMenu, home}) {
  //const [scroll, setScroll] = useState('')


 /*  useEffect(() => {
    window.addEventListener('scroll', e => {
      setScroll(document.scrollingElement.scrollTop)
    })
  }) */


  return (
    <div className="header">
    <Link href="/">
        <a>
        <h2 className='header-name strokeme'>FIONA KELLY</h2>
        </a> 
      </Link>
      <MenuIcon setShowMenu={() => setShowMenu()} showMenu={showMenu}/>
    </div>
  )
}