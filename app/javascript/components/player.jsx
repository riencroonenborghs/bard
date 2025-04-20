import React, { Fragment, useEffect, useState } from "react";
import { Howl } from "howler";
import { useSelector } from "react-redux";

import Constants from "./utils/constants";
import Progressbar from "./player/progressbar";
import BottomBar from "./player/bottom_bar";

function Player() {
  const playing = useSelector((state) => state.player.playing);
  const resumed = useSelector((state) => state.player.resumed);
  const paused = useSelector((state) => state.player.paused);

  const artist = useSelector((state) => state.track.artist);
  const album = useSelector((state) => state.track.album);
  const track = useSelector((state) => state.track.track);

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (playing && !resumed) {
      const howl = new Howl({
        src: [`${Constants.host}${track.stream_url}.${track.file_format}`],
        html5: true
      });
      howl.play();
      setPlayer(howl);
    }
  }, [playing, resumed]);

  useEffect(() => {
    if (track.id && paused) {
      player.pause();
    }
  }, [paused]);

  useEffect(() => {
    if (playing && resumed) {
      player.play();
    }
  }, [playing, resumed])

  // useEffect(() => {
  //   const listener = (event) => {
  //     player.seek(event.detail.elapsed)
  //   }
  //   subscribe("player-seek", listener)
  //   return () => unsubscribe("player-seek", listener)
  // });

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
