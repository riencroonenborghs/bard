import React from "react";

import PlayerButtons from "./player_buttons";
import PlayerDuration from "./player_duration";
import PlayerDetails from "./player_details";

function BottomBar(props) {
  return (
    <div className="flex flex-row p-3 pt-6 pb-6 items-center">
      <div className="flex flex-row items-center w-64">
        <PlayerButtons playing={true} artist={props.artist} album={props.album} track={props.track}></PlayerButtons>
        <PlayerDuration track={props.track}></PlayerDuration>
      </div>
      <PlayerDetails artist={props.artist} album={props.album} track={props.track}></PlayerDetails>
    </div>
  );
}

export default BottomBar;
