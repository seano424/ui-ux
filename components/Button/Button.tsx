import clsx from 'clsx'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { primary, backgroundColor, size, label } = props
  const sm = size === 'small' || size === undefined
  const md = size === 'medium'
  const lg = size === 'large'
  return (
    <button
      className={clsx(
        'rounded',
        sm && 'px-3 py-1',
        md && 'px-5 py-2',
        lg && 'px-8 py-3',
        primary ? 'bg-teal-300 text-black' : 'bg-fuchsia-500 text-white'
      )}
      type="button"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
