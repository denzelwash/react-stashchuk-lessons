import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

store.subscribe(() => console.log("STORE UPDATE", store.getState()));

export default store;
