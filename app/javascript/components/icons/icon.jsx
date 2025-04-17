import React from "react";

function Icon(props) {
  const color = props.color || "currentColor";
  const style = {
    height: `${props.size / 2}rem`
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} style={style}>
      {props.children}
    </svg>
  );
}

export default Icon;
