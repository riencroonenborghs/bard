import React from "react";
import { Link } from "react-router";

import AlbumIcon from "./icons/album_icon";
import ArtistHeader from "./artist_header";

function Album(props) {  
  return (
    <div className="rounded-lg shadow-lg bg-gray-700 p-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="font-thin break-all overflow-auto">
            <ArtistHeader artist={props.artist}></ArtistHeader>
          </div>
        </div>
        <Link to={props.album.url}>
          <div className="flex flex-row justify-center pt-4">
            <div className="flex flex-row justify-center p-2">
              {props.album.cover_url &&
                <img src={props.album.cover_url} className="rounded-lg" />
              }
              {!props.album.cover_url &&
                <AlbumIcon size={22}></AlbumIcon>
              }
            </div>
          </div>
          <div className="flex flex-row justify-center pt-4">
            <div className="text-lg font-bold break-all overflow-auto">
              {props.album.title}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-sm font-thin">
              {props.album.year}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Album;
