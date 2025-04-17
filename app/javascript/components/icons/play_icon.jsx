import React from "react";
import Icon from "./icon";

function PlayIcon(props) {
  return (
    <Icon size={props.size} color={props.color}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </Icon>
  );
}

export default PlayIcon;
