import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: [],
  },
  reducers: {
    addBook: (state, { payload }) => {
      const book = {
        ...payload,
        id: uuidv4(),
        isFavorite: false,
      };
      state.value = [...state.value, book];
    },
    deleteBook: (state, { payload }) => {
      state.value = state.value.filter((b) => b.id !== payload);
    },
    toggleFavorites: (state, { payload }) => {
      state.value = state.value.map((b) =>
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
