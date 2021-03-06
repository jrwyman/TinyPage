import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './common/nav/navbar';
import Profile from './profile/profile';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';
import Feed from './feed/feed';
import './app.css';

const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />

      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/feed" component={Feed} />
    </Switch>
  </div>
);

export default App;
