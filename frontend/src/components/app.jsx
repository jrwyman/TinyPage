import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import ProfileContainer from './profile/profile_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FeedContainer from './feed/feed_container';
import PostComposeContainer from './posts/post_compose_container';

import './app.css'

const App = () => (
    <div className="app">
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/feed" component={FeedContainer} />
            <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
        </Switch>
    </div>
);

export default App;