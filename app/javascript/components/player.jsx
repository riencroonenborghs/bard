import React, { Fragment, useEffect, useState } from "react";
import { Howl, Howler } from "howler";

import { subscribe, unsubscribe, publish } from "./utils/events";
import Constants from "./utils/constants";
import Progressbar from "./progressbar";
import BottomBar from "./bottom_bar";

function Player() {
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState({});
  const [track, setTrack] = useState({});
  const [player, setPlayer] = useState(null);

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
        publish("reset")
      }

      setArtist(event.detail.artist); 
      setAlbum(event.detail.album); 
      setTrack(event.detail.track);
      createPlayer(event.detail.track);
    }
    subscribe("play", listener);
    return () => unsubscribe("play", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.pause(); }
    subscribe("pause", listener)
    return () => unsubscribe("pause", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.play(); }
    subscribe("resume", listener)
    return () => unsubscribe("resume", listener)
  });


  useEffect(() => {
    const listener = (event) => {
      player.seek(event.detail.elapsed)
    }
    subscribe("skip", listener)
    return () => unsubscribe("skip", listener)
  });

  return (
    <div className="border-t border-gray-500 sticky bottom-0 w-full bg-gray-700 hiddesn">
      {track.id && 
        <Fragment>
          {track.duration && <Progressbar track={track}></Progressbar>}
          <BottomBar artist={artist} album={album} track={track}></BottomBar>
        </Fragment>
      }
    </div>
  );
}

export default Player;
