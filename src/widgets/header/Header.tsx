import React from "react";
import { cn } from "@/shared/lib";
import { DivProps } from "@/shared/types";

export const Header: React.FC<DivProps>  = ({ className, children, ...otherProps }) => {
  return (
    <header
      className={cn('flex justify-between items-center bg-light-neutral-50 shadow-custom h-16 p-4 rounded-t-lg', className)}
      {...otherProps}
    >
      {children}
    </header>
  );
}
