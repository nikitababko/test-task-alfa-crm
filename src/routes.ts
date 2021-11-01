import { ComponentType } from 'react';

import Register from './pages/register';
import Home from './pages/home';

export interface IRoute {
  path: string;
  exact?: boolean;
  component: ComponentType;
}

export enum RouteNames {
  REGISTER = '/register',
  HOME = '/',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.REGISTER,
    exact: true,
    component: Register,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    exact: true,
    component: Home,
  },
];
