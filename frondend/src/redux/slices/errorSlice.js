import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    addError: (state, { payload }) => {
      return payload;
    },
    clearError: () => {
      return "";
    },
  },
});

export const { addError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
