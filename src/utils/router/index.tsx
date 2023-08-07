import React, { memo, ReactElement } from 'react';
import { Switch } from 'react-router-dom';

import { IRoute } from './interfaces.ts';
import { ROUTES } from './routes.tsx';
import RouteWithSubRoutes from './RouteWithSubRoutes.tsx';

const Router = (): ReactElement => (
  <Switch>
    {ROUTES.map((route: IRoute) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </Switch>
);

export default memo(Router);
