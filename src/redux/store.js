import { createSlice, configureStore } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
  },
});

export const { add } = booksSlice.actions;

const store = configureStore({
  reducer: booksSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

export default store;
