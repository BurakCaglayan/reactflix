import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "@/redux/moviesSlice";
import movieDetailsSlice from "@/redux/movieDetailSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsSlice,
  },
});
