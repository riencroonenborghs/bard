import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { pause, resume } from "../reducers/player_slice";
import PauseIcon from "../icons/pause_icon";
import PlayIcon from "../icons/play_icon";

function PlayerButtons(props) {
  const playing = useSelector((state) => state.player.playing);
  const track = useSelector((state) => state.track.track);
  const dispatch = useDispatch()

  function pauseClicked () {
    dispatch(pause())
  }

  function playClicked () {
    dispatch(resume());
  }

  return (
    <Fragment>
      <div className={"cursor-pointer " + (playing && props.track.id === track.id ? "" : "hidden") } onClick={pauseClicked}>
        <PauseIcon size={4} />
      </div>
      <div className={"cursor-pointer " + (playing && props.track.id === track.id ? "hidden" : "") } onClick={playClicked}>
        <PlayIcon size={4} />
      </div>
    </Fragment>
  );
}

export default PlayerButtons;
