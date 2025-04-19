import React, { Fragment, useEffect, useState } from "react";
import { Howl, Howler } from "howler";

import { subscribe, unsubscribe, publish } from "./utils/events";
import Constants from "./utils/constants";
import Progressbar from "./player/progressbar";
import BottomBar from "./player/bottom_bar";

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
        publish("player-reset");
      }

      setArtist(event.detail.artist); 
      setAlbum(event.detail.album); 
      setTrack(event.detail.track);
      createPlayer(event.detail.track);
    }

    subscribe("player-play", listener);
    return () => unsubscribe("player-play", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.pause(); }
    subscribe("player-pause", listener)
    return () => unsubscribe("player-pause", listener)
  });

  useEffect(() => {
    const listener = (_event) => { player.play(); }
    subscribe("player-resume", listener)
    return () => unsubscribe("player-resume", listener)
  });

  useEffect(() => {
    const listener = (event) => {
      player.seek(event.detail.elapsed)
    }
    subscribe("player-seek", listener)
    return () => unsubscribe("player-seek", listener)
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
