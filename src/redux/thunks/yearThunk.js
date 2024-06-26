import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from '../../services/utility';

const fetchYearData = createAsyncThunk(
  "year/fetchYearData",
  async () => {
    const response = await axios.get(`years/get-all`);
    return response.data;
  }
);

export  {fetchYearData};