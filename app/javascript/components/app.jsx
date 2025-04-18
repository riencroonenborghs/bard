import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Menu from "./menu";
import Player from "./player";
import ArtistsView from "./views/artists_view";
import ArtistView from "./views/artist_view";
import AlbumsView from "./views/albums_view";
import AlbumView from "./views/album_view";
import TracksView from "./views/tracks_view";
import TrackView from "./views/track_view";

const style = {
  height: "calc(100vh)"
};

const root = createRoot(document.getElementById("bard-player"));
root.render(
  <BrowserRouter>
    <div className="flex flex-row">
      <Menu></Menu>
      <div className="w-full overflow-auto" style={style}>
        <Routes>
          <Route path="/" element={<ArtistsView />} />
          <Route path="/artists" element={<ArtistsView />} />
          <Route path="/artists/:artistId" element={<ArtistView />} />
          <Route path="/albums" element={<AlbumsView />} />
          <Route path="/albums/:albumId" element={<AlbumView />} />
          <Route path="/tracks" element={<TracksView />} />
          <Route path="/tracks/:trackId" element={<TrackView />} />
        </Routes>
      </div>
    </div>
    <Player></Player>
  </BrowserRouter>
);
