import React from "react";
import { Link } from "react-router";

import ArtistIcon from "./icons/artist_icon";

function ArtistHeader(props) {
  let textSize = undefined;

  switch(props.size) {
    case "md":
      textSize = "2xl";
      break;
    case "lg":
      textSize = "3xl";
      break;
    case "xl":
      textSize = "4xl";
      break;
  }

  return (
    <Link to={props.artist.url}>
      <div className="flex flex-row items-center">
        {props.artist.cover_url &&
          <img src={props.artist.cover_url} className="rounded-lg" />
        }
        {!props.artist.cover_url &&
          <div className="rounded bg-gray-600 p-1">
            <ArtistIcon size={2}></ArtistIcon>
          </div>
        }
        <div className={"ms-2 {textSize}"}>
          {props.artist.name}
        </div>
      </div>
    </Link>
  );
}

export default ArtistHeader;


