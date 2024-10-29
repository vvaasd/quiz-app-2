import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib';

type TitleLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  As?: TitleLevelType;
  text?: string;
  children?: ReactNode;
  className?: string;
}

const stylesH1 =
  'self-start font-unbounded font-normal text-2xl text-light-neutral-950';

export const Title: FC<TitleProps> = ({
  As = 'h1',
  children,
  className,
  text,
}) => {
  if (!text && !children)
    throw new TypeError(
      'You must use text props or children props into Title component',
    );
  return (
    <As
      className={cn(className, {
        [stylesH1]: As === 'h1',
      })}
    >
      {text && text}
      {children && children}
    </As>
  );
};
