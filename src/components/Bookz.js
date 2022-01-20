import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/books';

const Differentbooks = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {title}
      {author}
      <button type="button" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

export default Differentbooks;
