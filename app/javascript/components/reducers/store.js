import { configureStore } from "@reduxjs/toolkit";
import { trackSlice } from "./track_slice";
import { playerSlice } from "./player_slice";

export default configureStore({
  reducer: {
    track: trackSlice.reducer,
    player: playerSlice.reducer
  },
  // Howl instance is in the store and poops out lots of non-serializeable errors
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});