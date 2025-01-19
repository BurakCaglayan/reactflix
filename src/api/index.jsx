import axios from "axios";
import BASE_URL from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getMoviesRequest = createAsyncThunk(
  "data/getMoviesRequest",
  async ({ params }) => {
    const { page, query, type, year } = params;

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}&y=${year}`
    );
    return response.data;
  }
);

export const getMovieByIdRequest = createAsyncThunk(
  "data/getMoviesRequest",
  async ({ params }) => {
    const { id } = params;

    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  }
);
export default { getMoviesRequest, getMovieByIdRequest };
