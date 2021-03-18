import React from 'react';
import  {Route, Switch} from 'react-router-dom';

import Signin from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {

  return (
    <Switch>
    <Route  path='/login' component={Signin}/>  
    <Route  path='/dashboard' component={Dashboard}/>  
    </Switch>
  )
}

export default Routes;