import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerReducer } from "./slices/audioPlayerSlice";
import { searchBarReducer } from "./slices/searchBarSlice";
import { searchFiltersReducer } from "./slices/searchFiltersSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    searchBar: searchBarReducer,
    searchFilter: searchFiltersReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export { setSource as setAudioPlayerSource, setIsPaused, setCurrentTime, setDurationTime, setIsMuted } from "./slices/audioPlayerSlice";
export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";
export { setActiveFilter } from "./slices/searchFiltersSlice";