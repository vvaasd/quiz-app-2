import { IIconProps } from './icon.props'

export function DayIcon({ className, ...props }: IIconProps) {
  return (
    <svg
      className={className ?? ''}
      {...props}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_807_30657)'>
        <path
          d='M8 11.3337C9.84095 11.3337 11.3333 9.84127 11.3333 8.00033C11.3333 6.15938 9.84095 4.66699 8 4.66699C6.15905 4.66699 4.66667 6.15938 4.66667 8.00033C4.66667 9.84127 6.15905 11.3337 8 11.3337Z'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 0.666992V2.00033'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 14V15.3333'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.81333 2.81348L3.76 3.76014'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.24 12.2402L13.1867 13.1869'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.666666 8H2'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 8H15.3333'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.81333 13.1869L3.76 12.2402'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.24 3.76014L13.1867 2.81348'
          stroke='#727272'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_807_30657'>
          <rect width='16' height='16' rx='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
