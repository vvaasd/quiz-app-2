import { cn } from '@/shared/lib';

type ThemeItemProps = React.HTMLAttributes<HTMLLabelElement> & {
  themeName: string;
  imgSrc: string;
  defaultChecked: boolean;
  onChange: () => void;
  disabled?: boolean;
  type?: 'checkbox' | 'radio';
};

export const ThemeItem: React.FC<ThemeItemProps> = ({
  themeName,
  className,
  imgSrc,
  defaultChecked,
  onChange,
  disabled,
  type = 'checkbox',
  ...props
}) => {
  return (
    <label htmlFor={themeName} className={cn('relative', className)} {...props}>
      <input
        type={type}
        id={themeName}
        name="theme"
        disabled={disabled}
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="peer absolute opacity-0 h-0 w-0"
      />
      <figure
        className={cn(
          'mask-custom-gradient relative w-[147.5px] h-[110px] rounded-lg overflow-hidden shadow-custom outline outline-0 peer-checked:outline-2 peer-checked:outline-primary-500 peer-disabled:opacity-50',
          {
            ['peer-focus-visible:outline-2 peer-focus-visible:outline-primary-300']:
              !defaultChecked,
            ['cursor-pointer']: !disabled,
          },
        )}
      >
        <img
          className="absolute w-full h-full"
          src={imgSrc}
          alt={`Тема "${themeName}"`}
        />
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden bg-custom-gradient"></div>
        <figcaption className="absolute font-medium text-light-neutral-50 text-base leading-6 bottom-3 left-3">
          {themeName}
        </figcaption>
      </figure>
    </label>
  );
};
