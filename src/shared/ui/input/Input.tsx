import { clsx } from '../../lib'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input: React.FC<InputProps> = ({
  className,
  id,
  type = 'text',
  name,
  placeholder,
  label
}) => {
  return (
    <div className='flex flex-col gap-1.5'>
      {label && (
        <label
          htmlFor={id}
          className={'text-sm leading-5 text-light-neutral-950'}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          className,
          'h-11 w-full rounded-lg border-2 border-light-neutral-300 bg-transparent px-3 text-sm leading-5 text-light-neutral-700 placeholder-light-neutral-600 focus:outline-none'
        )}
      />
    </div>
  )
}
