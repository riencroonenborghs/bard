import React from "react";
import Icon from "./icon";

function PauseIcon(props) {
  return (
    <Icon size={props.size} color={props.color}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </Icon>
  );
}

export default PauseIcon;
