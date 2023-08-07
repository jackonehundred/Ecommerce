import React, { ReactElement, Suspense } from 'react';
// import { Route } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { IRoute } from './interfaces.ts';

const RouteWithSubRoutes = ({
  fallback,
  path,
  component: Component,
  redirect,
  isPrivate,
  exact,
}: IRoute): ReactElement => {
  //  TODO завязаться на авторизацию
  const isAuthenticated = true;

  const renderComponent = (componentProps: Record<string, unknown>): ReactElement | null => {
    if (redirect) {
      return <Redirect to={redirect} {...componentProps} />;
    }

    if (isPrivate) {
      return (
        <>
          {isAuthenticated && Component && <Component {...componentProps} />}
          {!isAuthenticated && <Redirect to="/login" />}
        </>
      );
    }

    return Component ? <Component {...componentProps} /> : null;
  };

  return (
    <Suspense fallback={fallback}>
      <Route component={renderComponent} exact={exact} path={path} />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
