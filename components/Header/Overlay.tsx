import { useAtom } from 'jotai'
import { mobileMenuAtom } from '@/atoms/mobileMenuAtom'

function Overlay(): JSX.Element {
  const [isOpen] = useAtom(mobileMenuAtom)
  if (!isOpen) return <></>
  return <div className="fixed inset-0 z-30 bg-black/50"></div>
}

export default Overlay
