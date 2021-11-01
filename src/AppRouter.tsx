import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RootStore } from 'utils/TypeScript';

import { privateRoutes, publicRoutes, RouteNames } from './routes';

const AppRouter: FC = () => {
  const { auth } = useSelector((state: any) => state);

  return auth.token ? (
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
