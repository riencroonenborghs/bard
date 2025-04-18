import React, { Fragment, useEffect, useState } from "react";
import Progressbar from "./progressbar";
import BottomBar from "./bottom_bar";
import globalEventEmitter from "./utils/events";

function Player() {
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState({});
  const [track, setTrack] = useState({});

  function onProgressbarClick() {
    console.log("here")
  }

  useEffect(() => {
    const listener = (event) => {
      setArtist(event.detail.artist); 
      setAlbum(event.detail.album); 
      setTrack(event.detail.track);
    }
    globalEventEmitter.addEventListener("play", listener)

    return () => globalEventEmitter.removeEventListener("play", listener)
  });

  return (
    <div className="border-t border-gray-500 sticky bottom-0 w-full bg-gray-700 hiddesn">
      {track.id && 
        <Fragment>
          <Progressbar track={track} value={0} onClick={onProgressbarClick}></Progressbar>
          <BottomBar artist={artist} album={album} track={track}></BottomBar>
        </Fragment>
      }
    </div>
  );
}

export default Player;
