import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RootStore } from 'utils/TypeScript';

import { privateRoutes, publicRoutes, RouteNames } from './routes';

const AppRouter: FC = () => {
  const { auth } = useSelector((state: any) => state);

  const [token, setToken] = useState('');

  useEffect(() => {
    const token: any = localStorage.getItem('access_token');

    setToken(token);
  }, []);

  return auth.token || token ? (
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
