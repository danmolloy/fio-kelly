import Link from 'next/link'

const menuObjects = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Media',
    href: '/media'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export default function Menu() {
  return (
    <div className='menu'>
      <div className='menu-list'>
      {menuObjects.map(i => (
        <Link href={i.href} key={i.href}>
          <a className='menu-items'>
            {i.name}
          </a>
        </Link>
      ))}
      </div>
    </div>
  )
}