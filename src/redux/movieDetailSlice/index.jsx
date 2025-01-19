import { createSlice } from "@reduxjs/toolkit";
import getMovieByIdRequest from "@/api";

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
      .addCase(getMovieByIdRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieByIdRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMovieByIdRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
