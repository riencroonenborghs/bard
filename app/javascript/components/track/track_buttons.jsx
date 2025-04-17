import React, { Fragment, useState } from "react";
import PauseIcon from "../icons/pause_icon";
import PlayIcon from "../icons/play_icon";

function TrackButtons(props) {
  const [playing, setPlaying] = useState(false);

  function pauseClicked () { setPlaying(!playing); }
  function playClicked () { setPlaying(!playing); }

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
