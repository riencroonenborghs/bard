import React, { Fragment, useState } from "react";
import globalEventEmitter from "../utils/events";

import PauseIcon from "../icons/pause_icon";
import PlayIcon from "../icons/play_icon";

function TrackButtons(props) {
  const [playing, setPlaying] = useState(false);

  function pauseClicked () {
    setPlaying(!playing);
    const event = new CustomEvent("pause");
    globalEventEmitter.dispatchEvent(event);
  }

  function playClicked () {
    setPlaying(!playing);
    const event = new CustomEvent("resume");
    globalEventEmitter.dispatchEvent(event);
  }

  return (
    <Fragment>
      <div className={"cursor-pointer " + (playing ? "hidden" : "") } onClick={pauseClicked}>
        <PauseIcon size={4} />
      </div>
      <div className={"cursor-pointer " + (playing ? "" : "hidden") } onClick={playClicked}>
        <PlayIcon size={4} />
      </div>
    </Fragment>
  );
}

export default TrackButtons;
