import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMovie = createAsyncThunk(
  "getMovie",
  async (object, { getState, rejectWithValue }) => {
    // console.log(getState());
    try {
      const { data } = await axios.get(
        // "https://baconipsum.com/api/?type=meat-and-filler"
        "https://api.themoviedb.org/3/movie/popular?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055&language=en-US&page=1"
      );
      const res = data.results;
      console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const reducer = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDataMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getDataMovie.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDataMovie.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default reducer;