import React from 'react';
import { cn } from '@/shared/lib';
import { Loader } from '@/shared/ui';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  colorVariant?: 'primary' | 'transparent';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  isLoading = false,
  colorVariant = 'primary',
  ...props
}) => {
  return (
    <button
      className={cn(
        ' py-3 px-4 rounded-lg text-light-neutral-50 text-base font-semibold w-[311px] transition-colors',
        className,
        {
          ['bg-transparent']: colorVariant === 'transparent',
          ['bg-primary-500 active:bg-primary-400']: colorVariant === 'primary',
          ['disabled:bg-primary-400']: isLoading,
          ['disabled:bg-light-neutral-200 disabled:text-light-neutral-400']:
            colorVariant === 'primary' && !isLoading,
        },
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader /> : props.children}
    </button>
  );
};
