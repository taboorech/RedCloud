import { createSlice } from "@reduxjs/toolkit";

const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState: {
    audioPlayer: new Audio(),
    source: "./music/Tom Odell - Another Love.mp3",
    isPaused: true,
    currentTime: +localStorage.getItem("currentTime") || 0,
    durationTime: 0,
    isMuted: localStorage.getItem("audioPlayerMuted") === "true",
  },

  reducers: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDurationTime: (state, action) => {
      state.durationTime = action.payload;
    },
    setIsMuted: (state, action) => {
      state.isMuted = action.payload;
    }
  }
});

export const { setSource, setIsPaused, setCurrentTime, setDurationTime, setIsMuted } = audioPlayerSlice.actions;
export const audioPlayerReducer = audioPlayerSlice.reducer;