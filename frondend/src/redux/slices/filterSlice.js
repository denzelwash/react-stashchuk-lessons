import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    title: "",
    author: "",
    onlyFavorite: false,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
    resetFields: () => ({
      title: "",
      author: "",
      onlyFavorite: false,
    }),
  },
});

export const { changeFilter, resetFields } = filterSlice.actions;

export default filterSlice.reducer;
