import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { current } from "./reducers/track_slice";
import { play, pause, resume } from "./reducers/player_slice";

import PlayIcon from "./icons/play_icon";
import PauseIcon from "./icons/pause_icon";
import QueueIcon from "./icons/queue_icon";

function TrackButtons(props) {
  const playing = useSelector((state) => state.player.playing);
  const playingTrackId = useSelector((state) => state.player.trackId);
  const track = useSelector((state) => state.track.track);
  const dispatch = useDispatch()

  const addToPlaylist = () => {
    console.log("addToPlaylist");
  }

  function pauseClicked () {
    dispatch(pause())
  }

  function playClicked () {
    if (track !== null) {
      dispatch(
        current({
          artist: props.artist,
          album: props.album,
          track: props.track
        })
      );
      dispatch(
        play({
          trackId: props.track.id
        })
      );
    } else {
      dispatch(resume())
    }
  }

  return (
    <Fragment>
      <div className="w-16 flex flex-row justify-center items-center">
        <div className={"cursor-pointer " + (playing && props.track.id === playingTrackId ? "" : "hidden") } onClick={pauseClicked}>
          <PauseIcon size={4} />
        </div>
        <div className={"cursor-pointer " + (playing && props.track.id === playingTrackId ? "hidden" : "") } onClick={playClicked}>
          <PlayIcon size={4} />
        </div>
      </div>
      <div className="w-16 flex flex-row justify-center items-center">
        <a className="cursor-pointer" onClick={() => addToPlaylist()}>
          <QueueIcon size={4}></QueueIcon>
        </a>
      </div>
    </Fragment>
  );
}

export default TrackButtons;
