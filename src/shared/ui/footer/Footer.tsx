import { clsx } from '../../lib'

type FooterProps = React.HTMLAttributes<HTMLElement>

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={clsx(className, 'text-center')}>
      <p className='text-xs leading-4 text-light-neutral-600'>
        Проект выполнен в рамках стажировки&nbsp;
        <a
          href='https://preax.ru/'
          target='_blank'
          rel='noreferrer'
          className='underline underline-offset-1'
        >
          PREAX
        </a>
      </p>
    </footer>
  )
}
