import { FC, SVGProps } from 'react';

export const DangerIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_531_7674)'>
        <path
          d='M7.99946 16C7.50098 16 6.99505 15.8735 6.54864 15.6131L2.1292 13.0611C1.23638 12.5403 0.678375 11.5806 0.678375 10.5464V5.45734C0.678375 4.42316 1.23638 3.46338 2.1292 2.94257L6.54864 0.390607C7.44145 -0.130202 8.55003 -0.130202 9.45029 0.390607L13.8697 2.94257C14.7625 3.46338 15.3206 4.42316 15.3206 5.45734V10.5464C15.3206 11.5806 14.7625 12.5403 13.8697 13.0611L9.45029 15.6131C9.00388 15.8735 8.49795 16 7.99946 16Z'
          fill='#FB6E6E'
        />
        <circle cx='7.99997' cy='11.166' r='0.5' fill='#FCFCFC' />
        <line
          x1='7.99997'
          y1='4.83301'
          x2='7.99997'
          y2='9.16634'
          stroke='#FCFCFC'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_531_7674'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
