import React from 'react';
import { cn } from '../../lib/classnames';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className={
        cn('h-11 placeholder-light-neutral-600 py-3 px-2.5 border-2 border-light-neutral-300 rounded-lg outline-none', props.className)
      }
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
      {...props}
    />
  );
};
