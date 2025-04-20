import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    artist: {},
    album: {},
    track: {},
  },
  reducers: {
    current: (state, action) => {
      state.artist = action.payload.artist;
      state.album = action.payload.album;
      state.track = action.payload.track;
    },
  },
})

export const { current } = trackSlice.actions;
export default trackSlice;
