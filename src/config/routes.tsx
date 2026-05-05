import { RouteObject } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';

export const homeRoutes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <HomePage />,
  },
];
