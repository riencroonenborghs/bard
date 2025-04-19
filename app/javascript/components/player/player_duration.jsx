import React, { useState, useEffect, Fragment } from "react";

import { publish, subscribe, unsubscribe } from "../utils/events";
import secondsToMMSS from "../utils/duration";

function PlayerDuration(props) {
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setElapsed(elapsed => elapsed + 1);

        if (props.track.duration) {
          const percentage = elapsed / props.track.duration;
          publish("player-progressbar-percentage", { percentage: percentage })
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing, elapsed]);

  useEffect(() => {
    const listener = (event) => {
      setPlaying(true);
      setElapsed(0);
    }
    subscribe("player-reset", listener)
    return () => unsubscribe("player-reset", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => { setPlaying(false) }
    subscribe("player-pause", listener)
    return () => unsubscribe("player-pause", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => { setPlaying(true) }
    subscribe("player-play", listener)
    return () => unsubscribe("player-play", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => {
      setElapsed(event.detail.elapsed)
    }
    subscribe("player-seek", listener)
    return () => unsubscribe("player-seek", listener)
  });

  return (
    <div className="flex flex-row font-thin ms-4">
      <span>{secondsToMMSS(elapsed)}</span>
      {props.track.duration &&
        <Fragment>
          <div className="ms-1 me-1">&mdash;</div>
          <span>{secondsToMMSS(props.track.duration)}</span>
        </Fragment>
      }
    </div>
  );
}

export default PlayerDuration;
