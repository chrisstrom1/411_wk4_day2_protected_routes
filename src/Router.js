import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;