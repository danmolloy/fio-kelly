import { Link, animateScroll as scroll } from 'react-scroll'
import { menuItems } from './header'

export type MenuProps = {
  setShowMenu: (i: boolean) => void
  setShowHeader: (i: boolean) => void
  showMenu: boolean
}

export default function Menu(props: MenuProps) {
  const { showMenu, setShowMenu,setShowHeader } = props;
  return (
    <div data-testid="menu-div" className={`${showMenu ? "opacity-90" : "opacity-0" } ease-out transition duration-300 rounded-bl flex flex-col z-20 bg-white fixed w-screen  min-h-screen  right-0 shadow text-2xl`}>
      <div className='flex flex-col w-full justify-evenly font-display mt-16'>
      <button className='py-4 m-4 flex flex-col text-black  items-center justify-center hover:text-amber-500 active:text-amber-400' onClick={() => {setShowMenu(false); scroll.scrollToTop({ smooth: true, duration: 500 })}}>
          Home
        </button>
      {menuItems.map(i => (
        <Link href='/' className='flex items-center justify-center' onClick={() => {setShowMenu(false);  setTimeout(() => setShowHeader(false), 1000)}} activeClass="active" to={i.title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}  key={i.title}>
          <button className=' w-full py-4 m-4 flex flex-col text-black  items-center justify-center hover:cursor-pointer hover:text-amber-500 active:text-amber-400'>
            {i.title}
          </button>
        </Link>
      ))}
      </div>
    </div>
  )
}