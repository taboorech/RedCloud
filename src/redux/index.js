import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerReducer } from "./slices/audioPlayerSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer
  }
});

export { setIsPaused, setCurrentTime, setIsMuted } from "./slices/audioPlayerSlice";