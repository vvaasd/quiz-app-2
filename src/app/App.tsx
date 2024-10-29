import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { ErrorBoundary } from '@/shared/ui';


export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
