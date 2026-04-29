import { Navigate, createBrowserRouter } from 'react-router-dom';

import { homeRoutes } from '@/config/routes';
import Root from '@/pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      ...homeRoutes,
      {
        path: '*',
        element: <Navigate to={'/'} replace />,
      },
    ],
  },
]);

export default router;
