import { cn } from '@/shared/lib';
import { DivProps } from '@/shared/types';

const Root: React.FC<DivProps> = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={cn(
        `flex justify-center items-center min-h-dvh bg-center bg-no-repeat bg-cover bg-[url('/images/light-bg.jpg')] bg-fixed`,
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

const Container: React.FC<DivProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn(`grow max-w-[375px] min-w-[375px] p-4`, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

const Header: React.FC<DivProps> = ({ className, children, ...otherProps }) => {
  return (
    <header
      className={cn('flex justify-between items-center', className)}
      {...otherProps}
    >
      {children}
    </header>
  );
};


const Main: React.FC<DivProps> = ({ children, className, ...otherProps }) => {
  return (
    <main className={className} {...otherProps}>
      {children}
    </main>
  );
};

const Footer: React.FC<DivProps> = ({ ...otherProps }) => {
  return (
    <footer className="mt-4 text-center" {...otherProps}>
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
};

const ContentWrapper: React.FC<DivProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn('p-4 rounded-lg bg-light-neutral-50', className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const Layout = {
  Root,
  Container,
  Header,
  Main,
  Footer,
  ContentWrapper,
};
