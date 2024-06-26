import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, { payload }) => {
      state.push(createBook(payload));
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
  extraReducers: (builder) => {
    builder.addCase(fetchRandomBook.fulfilled, (state, { payload }) => {
      state.push(createBook({ ...payload, type: "randomApi" }));
    });
  },
});

export const fetchRandomBook = createAsyncThunk(
  "books/fetchRandomBook",
  async () => {
    try {
      const data = await fetch("http://localhost:4000/random-book");
      const json = await data.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  }
);

function createBook(fields) {
  return {
    ...fields,
    id: uuidv4(),
    isFavorite: false,
  };
}

export const { addBook, deleteBook, toggleFavorites } = booksSlice.actions;

export default booksSlice.reducer;
