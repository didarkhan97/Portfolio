import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar-initials">
        DK
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink exact to="/resume" activeClassName="active">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
