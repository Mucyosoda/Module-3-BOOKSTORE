import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h1>Bookstore CMs</h1>
      <ul className="d-flex">
        <li>
          <Link to="/" exact> Books </Link>
        </li>
        <li>
          <Link to="/categories"> Categories</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
