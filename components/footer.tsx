import { animateScroll as scroll } from 'react-scroll'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='z-10 h-24 bottom-0 flex flex-row items-center justify-center border-t  bg-zinc-200'>
      <div className='flex flex-col items-center justify-center'>
      <a target="_blank" href='https://twitter.com/fizzlekelly' className=' text-2xl twitter-blue p-1 hover:text-blue-500 hover:cursor-pointer active:text-blue-400'>
        <AiOutlineTwitter />
      </a>
      <button className='hover:underline font-display text-sm font-light hover:cursor-pointer active:text-zinc-400' onClick={() => scroll.scrollToTop({ smooth: true, duration: 750 })}>
        Back to top
      </button>
      <a className='text-sm font-light font-display self-end mt-3 text-gray-500 underline hover:text-blue-500' href="https://www.purpleraspberry.uk/" target='_blank'>Purple Rasberry Photography</a>

      </div>
    </div>
  )
}