import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorites } from "../redux/slices/booksSlice.js";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const List = () => {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteBook(id));
  };

  const toggleHandler = (id) => {
    dispatch(toggleFavorites(id));
  };
  return (
    <>
      <div className="shadow-md p-6 rounded">
        <h2 className="text-xl font-semibold mb-4 pb-1 border-b">Book list</h2>
        {!books.length && (
          <div className="flex justify-center items-center p-6 border">
            <p className="font-medium">No books available</p>
          </div>
        )}
        {books.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center shadow p-4 mb-4"
          >
            <div>
              <h1 className="font-medium mb-2">{book.title}</h1>
              <p>{book.author}</p>
            </div>
            <button onClick={() => toggleHandler(book.id)}>
              {book.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <button
              onClick={() => deleteHandler(book.id)}
              className="border p-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
