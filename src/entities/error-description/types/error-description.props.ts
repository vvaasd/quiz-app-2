import { HTMLAttributes } from 'react';

export interface ErrorDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  errorId: number;
  text?: string;
}
