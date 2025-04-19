import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { subscribe } from "./utils/events";
import Menu from "./menu";
import Player from "./player";
import ArtistsView from "./views/artists_view";
import ArtistView from "./views/artist_view";
import AlbumsView from "./views/albums_view";
import AlbumView from "./views/album_view";
import RadioView from "./views/radio_view";

function Bard(props) {  
  const style = {
    height: "calc(100vh)"
  };
  
  return (
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
            <Route path="/radio" element={<RadioView />} />
          </Routes>
        </div>
      </div>
      <Player></Player>
    </BrowserRouter>
  );
}

export default Bard;
