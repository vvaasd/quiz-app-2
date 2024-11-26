import { cn } from '@/shared/lib';
import { DivProps } from '@/shared/types';

export const Header: React.FC<DivProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <header
      className={cn(
        'rounded-t-lg bg-light-neutral-50 sticky top-0 z-10',
        className,
      )}
      {...otherProps}
    >
      <div className="flex justify-between items-center bg-light-neutral-50 shadow-custom h-16 p-4 rounded-lg">
        {children}
      </div>
    </header>
  );
};
