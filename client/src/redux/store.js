import { configureStore } from "@reduxjs/toolkit";
import moviesLikesSlice from "./moviesStore";
import pageSlice from "./pageSlice";
import moviesPopupSlice from "./moviesPopupSlice";

const store = configureStore({
  reducer: {
    likes: moviesLikesSlice,
    pagination: pageSlice,
    popup: moviesPopupSlice,
  },
});

export default store;
