import { Welcome, ErrorPage, Main } from '@/pages/ui';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { ErrorIdEnum } from '@/shared/types';
import { observer } from 'mobx-react-lite';

export const AppRouter = observer(() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/main',
      element: <Main />,
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
