import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './TinyPage.png';
import './nav.css';

function NavBar({ loggedIn, logout }) {
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
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

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
