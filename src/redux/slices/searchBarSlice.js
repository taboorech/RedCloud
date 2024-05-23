import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: ""
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeValue } = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;