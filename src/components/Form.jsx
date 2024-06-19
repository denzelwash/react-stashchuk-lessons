import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/store.js";
import books from "../data/books.json";

export const Form = () => {
  const [form, setForm] = useState({ title: "", author: "" });
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(form));
  };

  const addRandomBookHandler = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * books.length);
    dispatch(addBook(books[randomNum]));
  };

  return (
    <>
      <form className="shadow-md p-6 rounded">
        <h2 className="text-xl font-semibold mb-4 pb-1 border-b">
          Add a new book
        </h2>
        <div className="mb-4 grid gap-1">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="block shadow px-4 py-2"
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="mb-4 grid gap-1">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            className="block shadow px-4 py-2"
            type="text"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          <button
            onClick={addBookHandler}
            className="px-4 py-2 border border-blue-300 bg-blue-300 grow"
          >
            Add book
          </button>
          <button
            onClick={addRandomBookHandler}
            className="px-4 py-2 border border-blue-300 bg-blue-300 grow"
          >
            Add random book
          </button>
          <button className="px-4 py-2 border border-blue-300 bg-blue-300 grow">
            Add random book via api
          </button>
        </div>
      </form>
    </>
  );
};
