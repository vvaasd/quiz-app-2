import { UserStore, ThemesStore } from '@/entities';
import { Layout, Logo } from '@/shared/ui';
import { Form } from '@/widgets';
import { useEffect } from 'react';

export const Welcome = () => {
  useEffect(() => {
    UserStore.clearUser();
    ThemesStore.clearThemes();
  }, []);

  return (
    <Layout.Root>
      <Layout.Container>
        <Layout.Header className="mb-3">
          <div>
            <Logo to={'/'} className="h-7" />
          </div>
        </Layout.Header>
        <Layout.ContentWrapper>
          <Layout.Main>
            <Form />
          </Layout.Main>
          <Layout.Footer />
        </Layout.ContentWrapper>
      </Layout.Container>
    </Layout.Root>
  );
};
