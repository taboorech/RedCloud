import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerReducer } from "./slices/audioPlayerSlice";
import { searchBarReducer } from "./slices/searchBarSlice";
import { searchFiltersReducer } from "./slices/searchFiltersSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    searchBar: searchBarReducer,
    searchFilter: searchFiltersReducer
  }
});

export { setIsPaused, setCurrentTime, setIsMuted } from "./slices/audioPlayerSlice";
export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";
export { setActiveFilter } from "./slices/searchFiltersSlice";