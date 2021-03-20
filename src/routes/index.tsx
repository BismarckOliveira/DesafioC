import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
