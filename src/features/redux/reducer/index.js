import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const reducer = createSlice({
  name: "counter",
  initialState: {
    getData: false,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: () => {}
});

export default reducer

// const initialState = {
//   getUser: false,
//   isLoading: false,
//   isError: false,
// };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "GET_MOVIE":
//       return {
//         ...state,
//         getUser: action.payload.user,
//         isLoading: action.payload.loading,
//         isError: action.payload.errorMessage,
//       };
//     default:
//       return state;
//   }
// }
