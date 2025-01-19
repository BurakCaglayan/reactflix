import { createSlice } from "@reduxjs/toolkit";
import getMoviesRequest from "@/api";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
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

export default moviesSlice.reducer;
