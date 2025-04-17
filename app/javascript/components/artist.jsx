import React from "react";
import { Link } from "react-router";

import ArtistIcon from "./icons/artist_icon";

function Artist(props) {  
  return (
    <Link to={props.artist.url}>
      <div className="rounded-lg shadow-lg bg-gray-700 p-4">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="rounded-lg shadow-sm bg-gray-600 w-32">
              <div className=" flex flex-row justify-center p-2">
                {props.artist.cover_url &&
                  <img src={props.artist.cover_url} className="rounded-lg" />
                }
                {!props.artist.cover_url &&
                  <ArtistIcon size={12}></ArtistIcon>
                }
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center pt-4">
            <div className="text-lg font-bold">
              {props.artist.name}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-xs font-thin">
              {props.artist.albumCount} {props.artist.albumCount === 1 ? "Album" : "Albums" }
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Artist;
