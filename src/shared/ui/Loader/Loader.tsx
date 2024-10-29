import { FC, HTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'mini';
}

export const Loader: FC<LoaderProps> = ({ variant = 'mini', ...props }) => {
  return (
    <>
      {variant === 'mini' && (
        <div
          className='flex w-full items-center justify-center animate-spin'
          {...props}
        >
          <Icon icon='spinner' className='animate-spin' />
        </div>
      )}
    </>
  );
};
