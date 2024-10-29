import { createBrowserRouter } from 'react-router-dom';
import { ServerError, SignInUp, ThemesPage, NotFound } from '@/pages';
import { PrivateRoute } from './hoc';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInUp />,
    errorElement: <ServerError />,
  },
  {
    path: '/server-error',
    element: <ServerError />,
    errorElement: <ServerError />,
  },
  {
    path: '/themes',
    element: <PrivateRoute children={<ThemesPage />} />,
    errorElement: <ServerError />,
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ServerError />,
  },
]);
