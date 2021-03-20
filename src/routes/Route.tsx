import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface IRouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { name } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!name ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
