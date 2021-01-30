import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to TinyPage!</h1>
        <Link className="signup-text" to="/signup"><h2>Create an account today!</h2></Link>
      </div>
      <p className="point">Your sensitive data is hashed using BCrypt before it ever reaches our database! With that being said, we do not recommend entering any personal information or real passwords on this site.</p>
      <p className="point">All basic functions of a social media site are present including accounts, feeds, likes, and comments (profile pictures coming soon).</p>
      <p className="point">Requests are made from the server side and protected with custom Authorization.</p>
    </div>
  );
}
export default Home;
