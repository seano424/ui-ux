import { useRef } from 'react'
import { useAtom } from 'jotai'
import { mobileMenuAtom } from '@/atoms/mobileMenuAtom'
import MobileMenu from './MobileMenu'
import Overlay from './Overlay'
import Image from 'next/image'

const links = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/',
    text: 'New',
  },
  {
    url: '/',
    text: 'Popular',
  },
  {
    url: '/',
    text: 'Trending',
  },
  {
    url: '/',
    text: 'Categories',
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuAtom)

  return (
    <nav className="container flex items-center justify-between py-4">
      <a href="/">
        <Image alt="Logo" src="/images/logo.svg" height={60} width={60} />
      </a>
      <ul className="hidden space-x-5 lg:flex">
        {links.map((link) => (
          <li key={link.text}>
            <a
              className="text-xl font-medium tracking-wide text-slate-700"
              href={link.url}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="relative z-50 lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <Image
            alt="Menu Close"
            src="/images/icon-menu-close.svg"
            height={25}
            width={25}
          />
        ) : (
          <Image
            alt="Menu Open"
            src="/images/icon-menu.svg"
            height={35}
            width={35}
          />
        )}
      </button>
      <Overlay />
      <MobileMenu />
    </nav>
  )
}

export default Header
