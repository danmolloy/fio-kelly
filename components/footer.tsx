import { animateScroll as scroll } from 'react-scroll'

export default function Footer() {
  return (
    <div className='z-10 h-24 bottom-0 flex flex-row items-center justify-center border-t  bg-zinc-200'>
      <button className='hover:underline font-display text-sm font-light hover:cursor-pointer active:text-zinc-400' onClick={() => scroll.scrollToTop({ smooth: true, duration: 750 })}>
        Back to top
      </button>
    </div>
  )
}