import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Progressbar from "./player/progressbar";
import BottomBar from "./player/bottom_bar";

function Player() {
  const track = useSelector((state) => state.track.track);

  return (
    <div className="border-t border-gray-500 sticky bottom-0 w-full bg-gray-700 hiddesn">
      {track.id && 
        <Fragment>
          {track.duration && <Progressbar></Progressbar>}
          <BottomBar></BottomBar>
        </Fragment>
      }
    </div>
  );
}

export default Player;
