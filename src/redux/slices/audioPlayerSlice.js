import { createSlice } from "@reduxjs/toolkit";

const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState: {
    isPaused: true,
    currentTime: 0,
    isMuted: localStorage.getItem("audioPlayerMuted") === "true",
  },

  reducers: {
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setIsMuted: (state, action) => {
      state.isMuted = action.payload;
    }
  }
});

export const { setIsPaused, setCurrentTime, setIsMuted } = audioPlayerSlice.actions;
export const audioPlayerReducer = audioPlayerSlice.reducer;