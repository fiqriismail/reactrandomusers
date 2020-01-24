import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <span className="navbar-brand mb-0 h1">Random Users App</span>
      <Link to="/">Home</Link>
      <Link to="/users">User List</Link>
      <Link to="/user/1">User Details</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

export default Header;
