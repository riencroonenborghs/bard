import React, { useState, useEffect } from "react";

import { subscribe, unsubscribe, publish } from "./utils/events";

function Progressbar(props) {
  const [value, setValue] = useState(0);

  const progressbarClicked = (event) => {
    const rect = event.nativeEvent.target.getBoundingClientRect();
    const percentage = event.nativeEvent.offsetX / rect.width;
    const elapsed = Math.floor(props.track.duration * percentage);

    publish("player-seek", { elapsed: elapsed });
    setValue(percentage);
  }

  useEffect(() => {
    const listener = (event) => {
      setValue(0);
    }
    subscribe("player-reset", listener)
    return () => unsubscribe("player-reset", listener)
  }, []);

  useEffect(() => {
    const listener = (event) => {
      setValue(event.detail.percentage);
    }
    subscribe("player-progressbar-percentage", listener)
    return () => unsubscribe("player-progressbar-percentage", listener)
  }, []);

  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={(event) => progressbarClicked(event)} value={value}>
    </progress>
  );
}

export default Progressbar;
