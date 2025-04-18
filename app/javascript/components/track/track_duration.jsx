import React, { useState, useEffect, Fragment } from "react";

import { subscribe, unsubscribe } from "../utils/events";
import secondsToMMSS from "../utils/duration";

function TrackDuration(props) {
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) { setElapsed(elapsed => elapsed + 1); }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  useEffect(() => {
    const listener = (event) => {
      setPlaying(true);
      setElapsed(0);
    }
    subscribe("reset", listener)
    return () => unsubscribe("reset", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => { setPlaying(false) }
    subscribe("pause", listener)
    return () => unsubscribe("pause", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => { setPlaying(true) }
    subscribe("resume", listener)
    return () => unsubscribe("resume", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => {
      setElapsed(event.detail.elapsed)
    }
    subscribe("skip", listener)
    return () => unsubscribe("skip", listener)
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

export default TrackDuration;
