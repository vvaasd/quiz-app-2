import React, { useState } from 'react';
import { cn } from '@/shared/lib/classnames';
import { Icon } from '@/shared/ui';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  borderVariant?: 'success' | 'error' | 'default';
  onClear?: () => void;
}

export const Input: React.FC<InputProps> = ({
  borderVariant = 'default',
  onClear = () => {},
  className,
  value,
  type,
  disabled,
  ...props
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const paddingRight = type === 'password' ? 'pr-[54px]' : 'pr-[38px]';

  return (
    <>
      <input
        className={cn(
          'focus:outline-none h-11 w-full placeholder-light-neutral-600 py-3 px-2.5 border-2 rounded-lg disabled:border-light-neutral-200 disabled:bg-light-neutral-200',
          className,
          {
            ['border-light-neutral-300 focus:border-primary-500']:
              borderVariant === 'default',
            ['border-light-success-100']: borderVariant === 'success',
          },
          paddingRight,
        )}
        type={type === 'password' && isPasswordShown ? 'text' : type}
        value={value}
        disabled={disabled}
        {...props}
      />
      {value && (
        <div className='flex absolute top-1/2 right-3 translate-y-[-50%]'>
          <button type='button' onClick={onClear} disabled={disabled}>
            {<Icon icon='xmark' />}
          </button>

          {type === 'password' && (
            <button
              disabled={disabled}
              type='button'
              onClick={() => {
                setIsPasswordShown((prevState) => !prevState);
              }}
            >
              {<Icon icon={isPasswordShown ? 'eyeslash' : 'eye'} />}
            </button>
          )}
        </div>
      )}
    </>
  );
};
