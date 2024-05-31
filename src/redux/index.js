import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer } from "./slices/searchBarSlice";
import { searchFiltersReducer } from "./slices/searchFiltersSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    searchFilter: searchFiltersReducer
  },
});

export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";
export { setActiveFilter } from "./slices/searchFiltersSlice";