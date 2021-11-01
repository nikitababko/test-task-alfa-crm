import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from './routes';

const AppRouter: FC = () => {
  const isAuth = true;

  return !isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}

      <Redirect to={RouteNames.HOME} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}

      <Redirect to={RouteNames.REGISTER} />
    </Switch>
  );
};

export default AppRouter;
