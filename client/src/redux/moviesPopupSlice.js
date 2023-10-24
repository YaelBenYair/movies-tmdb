import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  movieId: "",
};

const moviePopupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openModalAction(state, action) {
      state.openModal = action.payload;
    },
    setMovieId(state, action) {
      state.movieId = action.payload;
    },
  },
});

export const { openModalAction, setMovieId } = moviePopupSlice.actions;
export default moviePopupSlice.reducer;
