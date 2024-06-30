import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addError } from "./errorSlice";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoadingViaApi: false,
  },
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(createBook(payload));
    },
    deleteBook: (state, { payload }) => {
      return { ...state, books: state.books.filter((b) => b.id !== payload) };
    },
    toggleFavorites: (state, { payload }) => {
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === payload
            ? {
                ...b,
                isFavorite: !b.isFavorite,
              }
            : b
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomBook.pending, (state) => {
      state.isLoadingViaApi = true;
    });
    builder.addCase(fetchRandomBook.fulfilled, (state, { payload }) => {
      state.isLoadingViaApi = false;
      state.books.push(createBook({ ...payload, type: "randomApi" }));
    });
    builder.addCase(fetchRandomBook.rejected, (state) => {
      state.isLoadingViaApi = false;
    });
  },
});

export const fetchRandomBook = createAsyncThunk(
  "books/fetchRandomBook",
  async (url, thunkApi) => {
    try {
      const data = await fetch("http://localhost:4000/random-book-delayed");
      const json = await data.json();
      return json;
    } catch (e) {
      thunkApi.dispatch(addError(e.message));
      throw e;
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
