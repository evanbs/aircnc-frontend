import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import New from './pages/New';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
