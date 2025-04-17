import React from "react";
import AlbumIcon from "../icons/album_icon";

function TrackDuration(props) {
  const track = props.track;
  const coverImage = track.coverUrl !== "";

  return (
    <div className="flex flex-row">
      {coverImage ?
        <img className="rounded-lg" width="48px" height="48px" src={track.coverUrl} /> :
        <AlbumIcon size={6}></AlbumIcon>
      }
      <div className="ms-4 flex flex-col">
        <div className="font-bold text-md">
          {track.title}
        </div>
        <div className="font-thin text-sm">
          <a href={track.artistUrl} data-turbo-target="content">
            {track.artist}
          </a>
          &mdash;
          <a href={track.albumUrl} data-turbo-target="content">
            {track.album}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackDuration;
