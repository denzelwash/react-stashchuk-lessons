import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, { payload }) => {
      const book = {
        ...payload,
        id: uuidv4(),
        isFavorite: false,
      };
      state.push(book);
    },
    deleteBook: (state, { payload }) => {
      return state.filter((b) => b.id !== payload);
    },
    toggleFavorites: (state, { payload }) => {
      return state.map((b) =>
        b.id === payload
          ? {
              ...b,
              isFavorite: !b.isFavorite,
            }
          : b
      );
    },
  },
});

export const { addBook, deleteBook, toggleFavorites } = booksSlice.actions;

export default booksSlice.reducer;
