/* eslint-disable linebreak-style */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const DELETE_BOOK = 'bookStore/books/DELETE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

export const initState = {
  books: [
    {
      id: 0,
      title: 'Visit Rwanda',
      author: 'Lionel Messi',
    },
  ],
};

export const addBook = (extraBook) => ({
  type: ADD_BOOK,
  extraBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const getBooks = () => ({
  type: GET_BOOK,
});

const reducer = (action = { type: 'error' }, state = initState) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.books, action.extraBook];
    case DELETE_BOOK:
      return state.books.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return state;
    default:
      return state;
  }
};

export default reducer;
