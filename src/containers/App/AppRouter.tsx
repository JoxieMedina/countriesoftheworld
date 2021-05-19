import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from 'containers/Home';

export const RoutesPaths = {
  HOME: '/',
};

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
