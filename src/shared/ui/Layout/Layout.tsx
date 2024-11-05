import { FC, HTMLAttributes, ReactNode } from 'react';
import { ErrorBoundary, Footer, Header } from '@/shared/ui';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  childrenHeader?: ReactNode;
  variant?: 'h-min-content' | 'h-screen';
}

export const Layout: FC<LayoutProps> = ({
  children,
  childrenHeader,
  variant = 'h-min-content',
}) => {
  return (
    <ErrorBoundary>
      <>
        {variant === 'h-min-content' && (
          <div className='h-full min-h-screen py-4 min-w-[375px] flex flex-col justify-center items-center'>
            <div className='w-full max-w-[343px]'>
              {childrenHeader ? <header>{childrenHeader}</header> : <Header />}
              <div className='bg-light-neutral-50 p-4 rounded-lg'>
                <main className='mb-4 font-montserrat text-light-neutral-950 flex flex-col items-center'>
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        )}
        {variant === 'h-screen' && (
          <div className='mx-auto py-7 px-8 h-screen w-full w-full max-w-[375px]'>
            <header className='flex items-center justify-between'>
              {childrenHeader}
            </header>
            <main>{children}</main>
          </div>
        )}
      </>
    </ErrorBoundary>
  );
};
