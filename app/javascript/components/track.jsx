import React, { Fragment } from "react";
import { Link } from "react-router";

import { publish } from "./utils/events";
import PlayIcon from "./icons/play_icon";
import QueueIcon from "./icons/queue_icon";
import AlbumIcon from "./icons/album_icon";

function Track(props) {
  const play = () => {
    publish("player-play", { artist: props.artist, album: props.album, track: props.track })
  }

  const addToPlaylist = () => {
    console.log("addToPlaylist");
  }

  return (
    <div className="flex flex-row justify-between border-b border-gray-700 p-3 hover:bg-gray-900">
      <div className="flex flex-row">
        <div className="w-16 flex flex-row justify-center items-center">
          <a className="cursor-pointer" onClick={() => play()}>
            <PlayIcon size={4}></PlayIcon>
          </a>
        </div>
        <div className="w-16 flex flex-row justify-center items-center">
          <a className="cursor-pointer" onClick={() => addToPlaylist()}>
            <QueueIcon size={4}></QueueIcon>
          </a>
        </div>
        {props.full &&
          <Fragment>
            <div className="w-16 flex flex-row justify-center items-center">
              {props.album.cover_url &&
                <img src={props.album.cover_url} className="rounded-lg" width={"32px"} height={"32px"} />
              }
              {!props.album.cover_url &&
                <AlbumIcon size={4}></AlbumIcon>
              }
            </div>
            <div className="flex flex-col">
              <div>
                {props.track.title}
              </div>
              <div className="flex flex-row items-center">
                <div className="font-thin text-sm flex flex-row">
                  <Link to={props.artist.url}>
                    {props.artist.name}
                  </Link>
                  <div className="ms-1 me-1"> &mdash; </div>
                  <Link to={props.album.url}>
                    {props.album.title}
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        }
        {!props.full &&
          <Fragment>
            <div className="w-16 flex flex-row justify-center items-center">
              {props.track.position}
            </div>
            <div className="flex flex-row justify-center items-center">
              {props.track.title}
            </div>
          </Fragment>
        }
      </div>
    </div>
  );
}

export default Track;
