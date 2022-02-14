import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AppRoute } from '../interfaces/general.interface';
import Landing from '../pages/public/Landing';
import NotFound from '../pages/public/NotFound';
import { RoutePaths } from './routes';

export const openRoutes: AppRoute[] = [
  {
    name: 'Welcome',
    path: RoutePaths.HOME,
    component: <Landing />,
    // component: lazy(() => import('../pages/public/Landing')),
  },
  {
    name: 'Not found',
    path: RoutePaths.NOT_FOUND,
    component: <NotFound />,
    // component: lazy(() => import('../pages/public/NotFound')),
  },
];

const OpenRoutes = (): JSX.Element[] => {
  return openRoutes.map((route) => <Route key={route.path} path={route.path} element={route.component}></Route>);
};

export default OpenRoutes;
