import { InputProps } from '@/shared/types';
import { cn } from '@/shared/lib';

export const Input: React.FC<InputProps> = ({
  id,
  label,
  className,
  ...otherProps
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-[6px] text-sm text-light-neutral-950"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(className, 'outline-none w-full h-11 p-[10px] border-[2px] rounded-lg text-sm bg-light-neutral-50 placeholder:text-light-neutral-600 focus:border-[#DF4F30] focus:ring-1 focus:ring-inset focus:ring-[#DF4F30]')}
        {...otherProps}
      />
    </div>
  );
};
