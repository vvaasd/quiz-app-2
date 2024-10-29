import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  children?: ReactNode;
  className?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  text,
  children,
  className,
}) => {
  if (!text && !children)
    throw new TypeError(
      'You must use text props or children props into Paragraph component',
    );
  return (
    <p
      className={cn('text-base font-normal text-light-neutral-950', className)}
    >
      {text && text}
      {children && children}
    </p>
  );
};
