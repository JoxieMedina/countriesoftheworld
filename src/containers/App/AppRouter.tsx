import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from 'containers/Home';
import CountryDetails from 'containers/CountryDetails';

export const RoutesPaths = {
  HOME: '/',
  PROFILE: '/country-profile',
};

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={RoutesPaths.HOME} exact component={Home} />
        <Route path={RoutesPaths.PROFILE} exact component={CountryDetails} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
