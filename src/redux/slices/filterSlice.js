import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    title: "",
    author: "",
    favorite: false,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
    resetFields: () => ({
      title: "",
      author: "",
      favorite: false,
    }),
  },
});

export const { changeFilter, resetFields } = filterSlice.actions;

export default filterSlice.reducer;
