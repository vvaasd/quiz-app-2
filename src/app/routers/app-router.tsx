import { Welcome, ThemePick, ErrorPage } from '@/pages/ui';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { ErrorIdEnum } from '@/shared/types';
import { observer } from 'mobx-react-lite';
import { UserStore } from '@/entities/store';

export const AppRouter = observer(() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/themes',
      element: UserStore.user ? <ThemePick /> : <Navigate to="/" />,
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
