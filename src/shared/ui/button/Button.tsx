import { clsx } from '../../lib'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className = '',
  children
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'rounded-lg bg-primary-500 px-7 py-3 text-base font-semibold leading-6 text-light-neutral-50'
      )}
    >
      {children}
    </button>
  )
}
