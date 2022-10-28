import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

export interface TooltipProps {
  message: string
  position?: 'top' | 'bottom'
  color?: 'red' | 'teal' | 'green' | 'primary'
}

const Tooltip = (props: TooltipProps) => {
  const { message, position = 'top', color = 'primary' } = props
  const [isOpen, setIsOpen] = useState(true)
  const isBottom = position === 'bottom'
  return (
    <div
      className={clsx(
        'flex justify-between p-5',
        !isOpen && 'hidden',
        isBottom ? 'fixed inset-x-0 bottom-0' : 'mb-5',
        color === 'primary' && 'bg-fuchsia-600 text-white',
        color === 'red' && 'bg-rose-100/80 text-slate-900',
        color === 'teal' && 'bg-teal-100/80 text-slate-900',
        color === 'green' && 'bg-emerald-100/80 text-slate-900'
      )}
    >
      <p>{message}</p>
      <button onClick={() => setIsOpen(false)}>
        <Image
          alt="close tooltip"
          src="/images/icon-menu-close.svg"
          height={15}
          width={15}
        />
      </button>
    </div>
  )
}

export default Tooltip
