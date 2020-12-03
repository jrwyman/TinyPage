import React from 'react';
import { Link } from 'react-router-dom';
import logo from './TinyPage.png';
import './nav.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="nav-links">
                    <button onClick={this.logoutUser}>Logout</button>
                    <Link to={'/feed'}>Feed</Link>
                    <Link to={'/new_post'}>New Post</Link>
                    <Link to={'/profile'}>Profile</Link>
                </div>
            );
        } else {
            return (
                <div className="nav-links">
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    renderLogo() {
        return (
            <img className="logo" src={logo} alt="logo" width="100px" />
        )
    }

    render() {
        return (
            <div className="navbar">
                {this.renderLogo()}
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;