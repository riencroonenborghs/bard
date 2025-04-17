import React from "react";
import { useParams } from "react-router";

function TrackView() {
  let { trackId } = useParams();
  
  return (
    <div>
      Track {trackId} goes here
    </div>
  );
}

export default TrackView;
