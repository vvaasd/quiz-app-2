import { cn } from '@/shared/lib';
import { Icon } from '@/shared/ui';

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  colorVariant?: 'default' | 'success' | 'error';
  className?: string;
}

export const Hint: React.FunctionComponent<HintProps> = ({
  className,
  colorVariant = 'default',
  ...props
}) => {
  return (
    <div className={cn('flex gap-[6px] items-center', className)} {...props}>
      {colorVariant !== 'default' && (
        <div>
          <Icon
            icon={colorVariant === 'success' ? 'check' : 'danger'}
            className='w-4 h-4'
          />
        </div>
      )}
      <p
        className={cn('text-xs leading-4', {
          ['text-light-neutral-600']: colorVariant === 'default',
          ['text-light-success-200']: colorVariant === 'success',
          ['text-light-danger-200']: colorVariant === 'error',
        })}
      >
        {props.children}
      </p>
    </div>
  );
};
