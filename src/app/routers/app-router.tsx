import { Welcome, ErrorPage, Themes, Main } from '@/pages/ui';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { ErrorIdEnum } from '@/shared/types';
import { observer } from 'mobx-react-lite';
import { UserStore, ThemesStore } from '@/entities';
import { MAX_THEMES } from '@/shared/config';

export const AppRouter = observer(() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/themes',
      element: UserStore.user ? <Themes /> : <Navigate to="/" />,
    },
    {
      path: '/main',
      element:
        ThemesStore.themes.length === MAX_THEMES ? (
          <Main />
        ) : (
          <Navigate to="/themes" />
        ),
    },
    {
      path: '/not-found',
      element: <ErrorPage errorId={ErrorIdEnum.NotFound} />,
    },
    {
      path: '/server-error',
      element: <ErrorPage errorId={ErrorIdEnum.ServerError} />,
    },
    {
      path: '*',
      element: <Navigate to="/not-found" />,
    },
  ]);

  return <RouterProvider router={router} />;
});
