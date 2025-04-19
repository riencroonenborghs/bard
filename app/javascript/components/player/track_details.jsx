import React from "react";

import AlbumIcon from "../icons/album_icon";

function TrackDuration(props) {
  const track = props.track;
  const coverImage = track.cover_url !== null;

  return (
    <div className="flex flex-row">
      {props.album.cover_url ?
        <img className="rounded-lg" width="48px" height="48px" src={props.album.cover_url} /> :
        <AlbumIcon size={6}></AlbumIcon>
      }
      <div className="ms-4 flex flex-col">
        <div className="font-bold text-md">
          {props.track.title}
        </div>
        <div className="font-thin text-sm">
          <a href={props.artist.url} data-turbo-target="content">
            {props.artist.name}
          </a>
          &mdash;
          <a href={props.album.url} data-turbo-target="content">
            {props.album.title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackDuration;
