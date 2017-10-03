import React from 'react';
import createHisotry from "history/createBrowserHistory";
import {Router, Route, Switch, Link, NavLink } from "react-router-dom";

import DashboardPage from '../components/dashboard';
import NotFoundPage from '../components/notfound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js";
export const history = createHisotry();
const AppRouter= () => (
  <Router history={history}>
    <div>

      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
