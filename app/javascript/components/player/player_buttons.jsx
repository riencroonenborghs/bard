import React, { Fragment, useState } from "react";

import { publish } from "../utils/events"
import PauseIcon from "../icons/pause_icon";
import PlayIcon from "../icons/play_icon";

function PlayerButtons(props) {
  const [playing, setPlaying] = useState(false);

  function pauseClicked () {
    setPlaying(!playing);
    publish("player-pause");
  }

  function playClicked () {
    setPlaying(!playing);
    publish("player-resume");
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

export default PlayerButtons;
