import { useEffect, useState } from 'react'
import MenuIcon from './menuIcon'
import { Link, animateScroll as scroll } from 'react-scroll'

export const menuItems: {title: string}[] = [
  {
    title: "About",
  },
  {
    title: "Listen",
  },
  {
    title: "Gallery",
  },
  {
    title: "Contact",
  },
]

export type HeaderProps = {
  showMenu: boolean
  setShowMenu: () => void
  setShowHeader: (arg: boolean) => void
  showHeader: boolean
}

export default function Header(props: HeaderProps) {
  const {showMenu, setShowMenu, setShowHeader, showHeader} = props;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > scrollPosition + 100) {
        setScrollPosition(currentPosition);
        setShowHeader(false)
      } else if (currentPosition < scrollPosition - 5) {
        setScrollPosition(currentPosition);
        setShowHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);


  return (
    <div
    data-testid="page-header" 
    className={
      showMenu 
      ?      "font-display  transition duration-500 ease-out fixed fill-white  z-30 h-16 w-screen top-0 flex flex-row  items-center justify-between   text-white "

      : !showHeader && scrollPosition < 750
      ? "font-display -translate-y-full transition duration-1000 fill-white fixed z-30 h-16 w-screen top-0 flex flex-row  items-center justify-between  text-zinc-100"  
      : !showHeader
      ? "font-display -translate-y-full transition duration-1000 bg-white fixed z-30 h-16 w-screen top-0 flex flex-row items-center justify-between shadow fill-black text-black"  
      : scrollPosition < 750
      ? "font-display  transition duration-500 ease-out fixed fill-white  z-30 h-16 w-screen top-0 flex flex-row  items-center justify-between   text-zinc-100"
      : "font-display transition duration-500 ease-out fixed  bg-white z-30 h-16 w-screen top-0 flex flex-row  items-center justify-between shadow fill-black text-black "}>
      <h1 className={'md:hidden p-4 '}>Fiona Kelly</h1>
      <div className='hidden md:flex w-screen  flex-row  justify-end pr-4'>
        <button className='my-6 p-2 text-lg font-light hover:cursor-pointer active:text-zinc-400' onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}>
          Home
        </button>
      {menuItems.map(i => (
        <Link href='/' data-testid={i.title} onClick={() => setTimeout(() => setShowHeader(false), 750)} activeClass="active" to={i.title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}  key={i.title} className=' p-4 m-2 text-lg font-light hover:cursor-pointer active:text-zinc-400'>
          <button className='p-2'>{i.title}</button>
        </Link>
      ))}
      </div>
      <MenuIcon setShowMenu={() => setShowMenu()} showMenu={showMenu}/>
    </div>
  )
}