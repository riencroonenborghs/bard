import React from "react";
import TrackButtons from "./track/track_buttons";
import TrackDuration from "./track/track_duration";
import TrackDetails from "./track/track_details";

function BottomBar(props) {
  return (
    <div className="flex flex-row p-3 pt-6 pb-6 items-center">
      <div className="flex flex-row items-center w-64">
        <TrackButtons track={props.track}></TrackButtons>
        <TrackDuration track={props.track}></TrackDuration>
      </div>
      <TrackDetails artist={props.artist} album={props.album} track={props.track}></TrackDetails>
    </div>
  );
}

export default BottomBar;
