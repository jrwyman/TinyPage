import React from 'react';
import { Link } from 'react-router-dom';
import logo from './TinyPage.png';
import './nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    if (this.props.loggedIn) {
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
    e.preventDefault();
    this.props.logout();
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

export default NavBar;
