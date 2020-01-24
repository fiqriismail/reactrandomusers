import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <Link to="/" className="navbar-brand">
        Random Users App
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            User List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users/1" className="nav-link">
            User Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
