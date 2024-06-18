import { useSelector } from "react-redux";

export const List = () => {
  const books = useSelector((state) => state.books);

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
          <h1 key={book.title}>{book.title}</h1>
        ))}
      </div>
    </>
  );
};
