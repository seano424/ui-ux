import { useAtom } from 'jotai'
import clsx from 'clsx'
import { mobileMenuAtom } from '@/atoms/mobileMenuAtom'

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

function MobileMenu(): JSX.Element {
  const [isOpen] = useAtom(mobileMenuAtom)
  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-1/3 right-0 z-40 transform bg-white transition-all duration-500 ease-linear',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-70'
      )}
    >
      <ul className="flex flex-col space-y-10 px-20 pt-32">
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
    </div>
  )
}

export default MobileMenu
