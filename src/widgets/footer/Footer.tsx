import React from "react";
import { DivProps } from "@/shared/types";

export const Footer: React.FC<DivProps> = ({ ...otherProps }) => {
  return (
    <footer className="mt-auto pt-4 text-center" {...otherProps}>
      <p className="text-light-neutral-600 text-xs">
        Проект выполнен в рамках стажировки{' '}
        <a
          className="underline"
          href="https://preax.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          PREAX
        </a>
      </p>
    </footer>
  );
}

