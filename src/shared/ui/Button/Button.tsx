import React from 'react';
import { cn } from '../../lib';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  colorVariant?: 'primary' | 'transparent';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  colorVariant = 'primary',
  ...props
}) => {
  return (
    <button
      className={cn(
        ' py-3 px-4 rounded-lg text-light-neutral-50 text-base font-semibold w-[311px] transition-colors',
        className,
        {
          ['bg-primary-500 disabled:bg-primary-400 active:bg-primary-400']:
            colorVariant === 'primary',
          ['bg-transparent']: colorVariant === 'transparent',
        },
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
