import { cn } from '@/shared/lib';
import { ButtonProps } from '@/shared/types';
import { Loader } from '@/shared/ui';

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  fullWidth = false,
  paddingSquare = false,
  isLoading,
  disabled,
  bgType = 'primary',
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-lg text-base font-semibold text-light-neutral-50 group transition-colors',
        {
          ['bg-light-neutral-200']: bgType === 'neutral',
          ['disabled:bg-primary-400']: bgType === 'primary',
          ['bg-primary-500']: bgType === 'primary',
          ['w-full']: fullWidth,
          ['py-3 px-4']: !paddingSquare,
          ['p-2']: paddingSquare,
          ['active:bg-primary-400']: !disabled,
        },
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader className="h-6" /> : children}
    </button>
  );
};
