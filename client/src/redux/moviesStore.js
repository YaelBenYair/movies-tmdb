import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loding: false,
  moviesLikes: [],
  error: "",
};

const moviesLikesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    add(state, action) {
      state.moviesLikes.push(action.payload);
    },
    resetState(state, action) {
      state.moviesLikes = JSON.parse(action.payload);
    },
    deleteLike(state, action) {
      const newLikes = state.moviesLikes.filter(
        (movie) => movie.id !== action.payload
      );
      state.moviesLikes = newLikes;
    },
  },
});

export const { add, resetState, deleteLike } = moviesLikesSlice.actions;
export default moviesLikesSlice.reducer;
