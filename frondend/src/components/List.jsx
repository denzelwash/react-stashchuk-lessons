import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorites } from "../redux/slices/booksSlice.js";
import { MdFavoriteBorder, MdFavorite, MdDeleteOutline } from "react-icons/md";

export const List = () => {
  const books = useSelector((state) => state.books.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const booksFiltered = books
    .filter((b) => b.title.toLowerCase().includes(filter.title.toLowerCase()))
    .filter((a) => a.author.toLowerCase().includes(filter.author.toLowerCase()))
    .filter((c) => (filter.onlyFavorite ? c.isFavorite : true));

  const deleteHandler = (id) => {
    dispatch(deleteBook(id));
  };

  const toggleHandler = (id) => {
    dispatch(toggleFavorites(id));
  };

  const highLight = (string, search) => {
    if (search === "") return string;
    const parts = string.split(new RegExp(`(${search})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <span style={{ background: "yellow" }} key={i}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      <div className="shadow-md p-6 rounded">
        <h2 className="text-xl font-semibold mb-4 pb-1 border-b">Book list</h2>
        {!booksFiltered.length && (
          <div className="flex justify-center items-center p-6 border">
            <p className="font-medium">No books available</p>
          </div>
        )}
        {booksFiltered.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center shadow p-4 mb-4"
          >
            <div>
              <h1 className="font-medium mb-2">
                {highLight(book.title, filter.title)}
              </h1>
              <p>{highLight(book.author, filter.author)}</p>
              <span className="text-xs">
                {book.type === "custom"
                  ? "Из формы"
                  : book.type === "random"
                  ? "Рандомная"
                  : book.type === "randomApi"
                  ? "Из api"
                  : ""}
              </span>
            </div>
            <button
              className="ml-auto mr-6"
              onClick={() => toggleHandler(book.id)}
            >
              {book.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <button onClick={() => deleteHandler(book.id)}>
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
