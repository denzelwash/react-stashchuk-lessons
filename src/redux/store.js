import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, { payload }) => {
      const book = {
        ...payload,
        id: uuidv4(),
      };
      state.books = [...state.books, book];
    },
    deleteBook: (state, { payload }) => {
      state.books = state.books.filter((b) => b.id !== payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

const store = configureStore({
  reducer: booksSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

export default store;
