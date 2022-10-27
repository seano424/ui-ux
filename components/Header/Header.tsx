import { useAtom } from 'jotai'
import { mobileMenuAtom } from '@/atoms/mobileMenuAtom'
import MobileMenu from './MobileMenu'
import Overlay from './Overlay'

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
        <img src="/images/logo.svg" alt="Logo" />
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
          <img src="/images/icon-menu-close.svg" alt="Logo" />
        ) : (
          <img src="/images/icon-menu.svg" alt="Logo" />
        )}
      </button>

      <MobileMenu />
      <Overlay />
    </nav>
  )
}

export default Header
