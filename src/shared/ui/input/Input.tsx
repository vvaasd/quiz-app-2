import { InputProps } from '@/shared/types';

export const Input: React.FC<InputProps> = ({
  id,
  label,
  className,
  ...otherProps
}) => {
  return (
    <div className={className}>
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
        className="w-full h-11 p-[10px] border-[2px] border-light-neutral-300 rounded-lg text-sm bg-light-neutral-50 placeholder:text-light-neutral-600"
        {...otherProps}
      />
    </div>
  );
};
