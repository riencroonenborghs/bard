import { createSlice } from "@reduxjs/toolkit";
import { Howl } from "howler";
import Constants from "../utils/constants";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    track: null,
    player: null,
    playing: false,
    paused: true,
    resumed: false,
    elapsed: 0,
    percentage: 0,
  },
  reducers: {
    play: (state, action) => {
      state.track = action.payload.track;
      state.playing = true;
      state.paused = false;
      state.resumed = false;

      if (state.player !== null) {
        state.player.stop();
      }

      state.player = new Howl({
        src: [`${Constants.host}${state.track.stream_url}.${state.track.file_format}`],
        html5: true
      });
      state.player.play();
    },
    pause: (state) => {
      state.playing = false;
      state.paused = true;
      state.resumed = false;
      state.player.pause();
    },
    resume: (state) => {
      state.playing = true;
      state.paused = false;
      state.resumed = true;
      state.player.play();
    },
    tick: (state) => {
      state.elapsed += 1
      if (state.track.duration !== null) {
        state.percentage = state.elapsed / state.track.duration;
      }
    },
    seek: (state, action) => {
      state.elapsed = action.payload.elapsed;
      state.percentage = action.payload.percentage;
      state.player.seek(state.elapsed)
    },
  },
})

export const { play, pause, resume, tick, seek } = playerSlice.actions;
export default playerSlice;
