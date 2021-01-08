import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import logo from './TinyPage.png';
import './nav.css';

function NavBar() {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);

  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="nav-links">
          <button type="submit" onClick={logoutUser}>Logout</button>
          <Link to="/feed">Feed</Link>
          <Link to="/profile">Profile</Link>
        </div>
      );
    }
    return (
      <div className="nav-links">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  };

  const renderLogo = () => (
    <img className="logo" src={logo} alt="logo" width="100px" />
  );

  return (
    <div className="navbar">
      {renderLogo()}
      {getLinks()}
    </div>
  );
}

export default NavBar;
