import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

store.subscribe(() =>
  console.log("STORE CURRENT", store.getState().books, store.getState().filter)
);

export default store;
