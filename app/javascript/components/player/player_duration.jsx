import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { tick } from "../reducers/player_slice";
import secondsToMMSS from "../utils/duration";

function PlayerDuration(props) {
  const playing = useSelector((state) => state.player.playing);
  const elapsed = useSelector((state) => state.player.elapsed);
  const track = useSelector((state) => state.track.track);
  const dispatch = useDispatch()
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        dispatch(tick())
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div className="flex flex-row font-thin ms-4">
      <span>{secondsToMMSS(elapsed)}</span>
      {track.duration &&
        <Fragment>
          <div className="ms-1 me-1">&mdash;</div>
          <span>{secondsToMMSS(track.duration)}</span>
        </Fragment>
      }
    </div>
  );
}

export default PlayerDuration;
