import React, { Fragment, useState, useEffect } from "react";

import { publish } from "../utils/events";
import Constants from "../utils/constants";
import PlayIcon from "../icons/play_icon";
import QueueIcon from "../icons/queue_icon";
import AlbumIcon from "../icons/album_icon";
import { Link } from "react-router";

function RadioView() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = () => {
    fetch(`${Constants.host}/radio`)
      .then(response => response.json())
      .then(data => {
        setTracks(data.data);
      })
      .catch(error => {
        // Handle any errors
      });
  }

  const play = (track) => {
    publish("play", { artist: track.artist, album: track.album, track: track });
  }
  
  return (
    <Fragment>
      <div className="p-8">
        <div className=" text-4xl uppercase text-gray-400">
          Radio
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-full pe-8">
            {tracks.map((track) =>
              <div key={track.id} className="flex flex-row justify-between border-b border-gray-700 p-3 hover:bg-gray-900">
                <div className="flex flex-row">
                  <div className="w-16 flex flex-row justify-center items-center">
                    <a className="cursor-pointer" onClick={() => play(track)}>
                      <PlayIcon size={4}></PlayIcon>
                    </a>
                  </div>
                  <div className="w-16 flex flex-row justify-center items-center">
                    <a className="cursor-pointer" onClick={() => addToPlaylist(track)}>
                      <QueueIcon size={4}></QueueIcon>
                    </a>
                  </div>
                  <div className="w-16 flex flex-row justify-center items-center">
                    {track.album.cover_url &&
                      <img src={track.album.cover_url} className="rounded-lg" width={"32px"} height={"32px"} />
                    }
                    {!track.album.cover_url &&
                      <AlbumIcon size={4}></AlbumIcon>
                    }
                  </div>
                  <div className="flex flex-col">
                    <div>
                      {track.title}
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="font-thin text-sm flex flex-row">
                        <Link to={track.artist.url}>
                          {track.artist.name}
                        </Link>
                        <div className="ms-1 me-1"> &mdash; </div>
                        <Link to={track.album.url}>
                          {track.album.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RadioView;
