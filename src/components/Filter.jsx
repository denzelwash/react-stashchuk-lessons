import { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState({
    title: "",
    author: "",
    favorite: false,
  });

  const resetHandler = (e) => {
    e.preventDefault();
    setFilter({ title: "", author: "", favorite: false });
  };

  return (
    <>
      <form className="shadow-md p-6 rounded ">
        <h2 className="text-xl font-semibold mb-4 pb-1 border-b">Filter</h2>
        <div className="flex gap-6 items-center justify-between">
          <input
            placeholder="Filter by title"
            className="block shadow px-4 py-2 grow"
            type="text"
            value={filter.title}
            onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          />
          <input
            placeholder="Filter by author"
            className="block shadow px-4 py-2 grow"
            type="text"
            value={filter.author}
            onChange={(e) => setFilter({ ...filter, author: e.target.value })}
          />
          <div className="flex items-center flex-row-reverse gap-2">
            <label htmlFor="favorite">Only favorites</label>
            <input
              id="favorite"
              className="block shadow px-4 py-2 grow"
              type="checkbox"
              checked={filter.favorite}
              onChange={(e) =>
                setFilter({ ...filter, favorite: e.target.value })
              }
            />
          </div>
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-300 grow"
            onClick={resetHandler}
          >
            Reset filters
          </button>
        </div>
      </form>
    </>
  );
};
