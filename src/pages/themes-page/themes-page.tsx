import { FC } from 'react';
import { Layout, Logo } from '@/shared/ui';
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
