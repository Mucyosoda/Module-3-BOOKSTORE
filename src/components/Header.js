import React from 'react';
import { Link } from 'react-router-dom';

export const Categoriesa = () => <h1> BOOKSTORE CMS </h1>;

const Header = () => (
  <ul className="navbar">
    <li>
      <Link to="/" className="navLink booksButton">
        {' '}
        Books
        {' '}
      </Link>
    </li>
    {' '}
    <li>
      <Link to="/categories" className="navLink categoriesButton">
        {' '}
        Categories
        {' '}
      </Link>
    </li>
    {' '}
  </ul>
);

Header.displayName = 'Header';

export default Header;
