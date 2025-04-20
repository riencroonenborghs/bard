import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { seek } from "../reducers/player_slice";

function Progressbar(props) {
  const track = useSelector((state) => state.track.track);
  const percentage = useSelector((state) => state.player.percentage);
  const dispatch = useDispatch();

  const progressbarClicked = (event) => {
    const rect = event.nativeEvent.target.getBoundingClientRect();
    const percentage = event.nativeEvent.offsetX / rect.width;
    const elapsed = Math.floor(track.duration * percentage);
    
    dispatch(
      seek({
        elapsed: elapsed,
        percentage: percentage
      })
    );
  }

  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={progressbarClicked} value={percentage}>
    </progress>
  );
}

export default Progressbar;
