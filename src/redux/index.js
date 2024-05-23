import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerReducer } from "./slices/audioPlayerSlice";
import { searchBarReducer } from "./slices/searchBarSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    searchBar: searchBarReducer
  }
});

export { setIsPaused, setCurrentTime, setIsMuted } from "./slices/audioPlayerSlice";
export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";