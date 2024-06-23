import { useDispatch, useSelector } from "react-redux";
import { changeFilter, resetFields } from "../redux/slices/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(resetFields());
  };

  const changeFilterHandler = (value, field) => {
    dispatch(changeFilter({ ...filter, [field]: value }));
  };

  return (
    <>
      <form className="shadow-md p-6 rounded ">
        <h2 className="text-xl font-semibold mb-4 pb-1 border-b">Fields</h2>
        <div className="flex gap-6 items-center justify-between">
          <input
            placeholder="Fields by title"
            className="block shadow px-4 py-2 grow"
            type="text"
            value={filter.title}
            onChange={(e) => changeFilterHandler(e.target.value, "title")}
          />
          <input
            placeholder="Fields by author"
            className="block shadow px-4 py-2 grow"
            type="text"
            value={filter.author}
            onChange={(e) => changeFilterHandler(e.target.value, "author")}
          />
          <div className="flex items-center flex-row-reverse gap-2">
            <label htmlFor="favorite">Only favorites</label>
            <input
              id="favorite"
              className="block shadow px-4 py-2 grow"
              type="checkbox"
              checked={filter.favorite}
              onChange={(e) =>
                changeFilterHandler(e.target.checked, "favorite")
              }
            />
          </div>
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-300 grow"
            onClick={resetHandler}
          >
            Reset fields
          </button>
        </div>
      </form>
    </>
  );
};
