import React from "react";
import { useSelector } from "react-redux";

import AlbumIcon from "../icons/album_icon";

function PlayerDetails(props) {
  const artist = useSelector((state) => state.track.artist);
  const album = useSelector((state) => state.track.album);
  const track = useSelector((state) => state.track.track);
  
  return (
    <div className="flex flex-row">
      {album.cover_url ?
        <img className="rounded-lg" width="48px" height="48px" src={album.cover_url} /> :
        <AlbumIcon size={6}></AlbumIcon>
      }
      <div className="ms-4 flex flex-col">
        <div className="font-bold text-md">
          {track.title}
        </div>
        <div className="font-thin text-sm">
          <a href={artist.url} data-turbo-target="content">
            {artist.name}
          </a>
          &mdash;
          <a href={album.url} data-turbo-target="content">
            {album.title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
