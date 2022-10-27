import { useAtom } from 'jotai'
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
  if (!isOpen) return <></>
  return (
    <div className="bg-white fixed inset-y-0 left-1/3 right-0 z-40">
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
