import { createSlice } from "@reduxjs/toolkit";

const searchFiltersSlice = createSlice({
  name: "searchFilters",
  initialState: {
    activeFilter: 0
  },
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    }
  }
});

export const { setActiveFilter } = searchFiltersSlice.actions;
export const searchFiltersReducer = searchFiltersSlice.reducer;