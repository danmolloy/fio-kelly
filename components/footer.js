import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='footer'>
      <Link href="https://twitter.com/fizzlekelly">
        <div className='hover:text-blue-500'>
          <BsTwitter className='icons'/>
        </div>
      </Link>
    </div>
  )
}