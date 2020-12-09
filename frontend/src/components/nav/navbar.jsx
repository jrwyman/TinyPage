import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './TinyPage.png';
import './nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return (
        <div className="nav-links">
          <button type="submit" onClick={this.logoutUser}>Logout</button>
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
  }

  logoutUser(e) {
    const { logout } = this.props;
    e.preventDefault();
    logout();
  }

  static renderLogo() {
    return (
      <img className="logo" src={logo} alt="logo" width="100px" />
    );
  }

  render() {
    return (
      <div className="navbar">
        {NavBar.renderLogo()}
        {this.getLinks()}
      </div>
    );
  }
}

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
