import { lazy } from 'react';

import { IRoute } from './interfaces.ts';

export const ROUTES: IRoute[] = [
  {
    component: lazy(() => import('@pages/Layout')),
    exact: true,
    fallback: <div> Loading... </div>,
    isPrivate: true,
    path: '/',
  },
  {
    component: lazy(() => import('@pages/NotFound')),
    exact: false,
    fallback: <div> Loading... </div>,
    isPrivate: false,
    path: '/404',
  },
  //  always should be at the end of array
  {
    exact: false,
    fallback: <div> Loading... </div>,
    path: '*',
    redirect: '/404',
  },
];
