import axios from "axios";
import BASE_URL from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getMoviesRequest = createAsyncThunk(
  "data/getMoviesRequest",
  async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=pokemon`);
    return response.data;
  }
);
export default getMoviesRequest;
