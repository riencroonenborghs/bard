import React, { Fragment } from "react";
import Progressbar from "./progressbar";
import BottomBar from "./bottom_bar";

function Player({ value, onSquareClick }) {
  function onProgressbarClick() {
    console.log("here")
   }

   const track = {
    title: "Title",
    artist: "Artist",
    album: "Album",
    artistUrl: "Artist URL",
    albumUrl: "Album URL",
    coverUrl: ""
   }

  return (
    <Fragment>
      <Progressbar value={0} onClick={onProgressbarClick}></Progressbar>
      <BottomBar track={track}></BottomBar>
    </Fragment>
  );
}

export default Player;
