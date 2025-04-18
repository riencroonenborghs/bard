import React, { useState } from "react";
import secondsToMMSS from "../utils/duration";

function TrackDuration(props) {
  return (
    <div className="flex flex-row font-thin ms-4">
      <span>00:00</span>
      <div className="ms-1 me-1">&mdash;</div>
      <span>{secondsToMMSS(props.track.duration)}</span>
    </div>
  );
}

export default TrackDuration;
