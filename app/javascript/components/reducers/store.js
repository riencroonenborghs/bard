import { configureStore } from "@reduxjs/toolkit";
import { trackSlice } from "./track_slice";
import { playerSlice } from "./player_slice";

export default configureStore({
  reducer: {
    track: trackSlice.reducer,
    player: playerSlice.reducer
  },
});