import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    title: "",
    author: "",
    favorite: "",
  },
  reducers: {
    changeFields: (state, { payload }) => {
      return payload;
    },
  },
});

export const { changeFields } = filterSlice.actions;

export default filterSlice.reducer;
