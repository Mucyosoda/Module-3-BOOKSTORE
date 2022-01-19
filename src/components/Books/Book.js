import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    onClick, title, author, id,
  } = props;
  return (
    <div className="square">
      <h2 className="title">
        {' '}
        {title}
        {' '}
      </h2>
      {' '}
      <p className="author">
        {' '}
        {author}
        {' '}
      </p>
      {' '}
      <button type="button" onClick={() => onClick(id)}>
        {' '}
        delete
        {' '}
      </button>
      {' '}
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  onClick: PropTypes.func,
};

Book.displayName = 'Book';

Book.defaultProps = {
  id: -1,
  title: 'A Python Hello World',
  author: 'Arturo Ortega',
  onClick: () => {},
};

export default Book;
