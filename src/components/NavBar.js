import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h1 className="main-heading">Bookstore CMs</h1>
      <ul className="thelinks d-flex">
        <li className="ho">
          <Link to="/" exact> BOOKS </Link>
        </li>
        <li className="ca">
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
      <span className="oval">
        <FaUserCircle />
      </span>
    </nav>
  </>
);

export default Nav;
