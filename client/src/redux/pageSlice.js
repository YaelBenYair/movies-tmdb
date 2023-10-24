import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    add(state, action) {
      state = action.payload;
    },
    subtract(state, action) {
      state = action.payload;
    },
  },
});

export const { add, subtract } = pageSlice.actions;
export default pageSlice.reducer;
