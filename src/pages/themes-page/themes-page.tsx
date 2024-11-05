import { FC } from 'react';
import { Layout } from '@/shared/ui';
import { Logo } from '@/widgets';
import { LogoutButton } from '@/features/auth';

export const ThemesPage: FC = () => {
  return (
    <Layout
      variant='h-screen'
      childrenHeader={
        <>
          <Logo size='mini' />
          <LogoutButton />
        </>
      }
    >
      <></>
    </Layout>
  );
};
