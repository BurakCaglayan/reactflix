import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "@/redux/dataSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
