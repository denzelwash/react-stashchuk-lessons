import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    title: "",
    author: "",
    favorite: false,
  },
  reducers: {
    changeFields: (state, { payload }) => {
      return payload;
    },
    resetFields: () => ({
      title: "",
      author: "",
      favorite: false,
    }),
  },
});

export const { changeFields, resetFields } = filterSlice.actions;

export default filterSlice.reducer;
