import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    track: null,
    playing: false,
    paused: true,
    resumed: false,
    elapsed: 0,
    progress: 0,
  },
  reducers: {
    play: (state, action) => {
      state.track = action.payload.track;
      state.playing = true;
      state.paused = false;
      state.resumed = false;
    },
    pause: (state) => {
      state.playing = false;
      state.paused = true;
      state.resumed = false;
    },
    resume: (state) => {
      state.playing = true;
      state.paused = false;
      state.resumed = true;
    },
    // tick: (state) => {
    //   state.elapsed += 1
    //   if (state.track.duration !== null) {
    //     state.progress = state.elapsed / state.track.duration;
    //   }
    // },
    // seek: (state, action) => {
    //   state.elapsed = action.payload
    //   if (state.track.duration !== null) {
    //     state.progress = state.elapsed / state.track.duration;
    //   }
    // },
  },
})

export const { play, pause, resume, tick, seek } = playerSlice.actions;
export default playerSlice;
