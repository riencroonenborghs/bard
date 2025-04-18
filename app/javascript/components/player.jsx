import React, { Fragment, useEffect, useState } from "react";
import { Howl, Howler } from "howler";

import Constants from "./utils/constants";
import Progressbar from "./progressbar";
import BottomBar from "./bottom_bar";
import globalEventEmitter from "./utils/events";

function Player() {
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState({});
  const [track, setTrack] = useState({});
  const [player, setPlayer] = useState(null);

  function onProgressbarClick() {
    console.log("here")
  }

  const createPlayer = (track) => {
    const howl = new Howl({
      src: [`${Constants.host}${track.stream_url}.${track.file_format}`],
      html5: true
    });
    howl.play();
    setPlayer(howl);
  }

  useEffect(() => {
    const listener = (event) => {
      if (player !== null) {
        player.stop();
        setPlayer(null);
      }

      setArtist(event.detail.artist); 
      setAlbum(event.detail.album); 
      setTrack(event.detail.track);
      createPlayer(event.detail.track);
    }
    globalEventEmitter.addEventListener("play", listener)
    return () => globalEventEmitter.removeEventListener("play", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.pause(); }
    globalEventEmitter.addEventListener("pause", listener)
    return () => globalEventEmitter.removeEventListener("pause", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.play(); }
    globalEventEmitter.addEventListener("resume", listener)
    return () => globalEventEmitter.removeEventListener("resume", listener)
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
