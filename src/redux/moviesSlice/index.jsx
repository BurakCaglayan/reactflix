import { createSlice } from "@reduxjs/toolkit";
import { getMoviesRequest } from "@/api";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    query: "Pokemon",
    type: "movie",
    year: null,
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMoviesRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setQuery, setType, setYear } =
  moviesSlice.actions;

export default moviesSlice.reducer;
