import React, { Fragment, useEffect, useState } from "react";

import { publish, subscribe, unsubscribe } from "./utils/events";
import PlayIcon from "./icons/play_icon";
import PauseIcon from "./icons/pause_icon";
import QueueIcon from "./icons/queue_icon";

function TrackButtons(props) {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    publish("player-play", { artist: props.artist, album: props.album, track: props.track })
  }

  const addToPlaylist = () => {
    console.log("addToPlaylist");
  }

  useEffect(() => {
    const listener = (event) => {
      setPlaying(props.track.id === event.detail.track.id);
    }

    subscribe("player-play", listener)
    return () => unsubscribe("player-play", listener)
  });

  useEffect(() => {
    const listener = (event) => {
      setPlaying(false);
    }

    subscribe("player-pause", listener)
    return () => unsubscribe("player-pause", listener)
  });

  function pauseClicked () {
    setPlaying(false);
    publish("player-pause");
  }

  function playClicked () {
    if (playing) {
      publish("player-resume");
    } else {
      play();
    }
  }

  return (
    <Fragment>
      <div className="w-16 flex flex-row justify-center items-center">
        <div className={"cursor-pointer " + (playing ? "" : "hidden") } onClick={pauseClicked}>
          <PauseIcon size={4} />
        </div>
        <div className={"cursor-pointer " + (playing ? "hidden" : "") } onClick={playClicked}>
          <PlayIcon size={4} />
        </div>
      </div>
      <div className="w-16 flex flex-row justify-center items-center">
        <a className="cursor-pointer" onClick={() => addToPlaylist()}>
          <QueueIcon size={4}></QueueIcon>
        </a>
      </div>
    </Fragment>
  );
}

export default TrackButtons;
