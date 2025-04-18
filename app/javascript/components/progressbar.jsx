import React, { useState, useEffect } from "react";

import { subscribe, publish } from "./utils/events";

function Progressbar(props) {
  const [value, setValue] = useState(0);

  const progressbarClicked = (event) => {
    const rect = event.nativeEvent.target.getBoundingClientRect();
    const percentage = event.nativeEvent.offsetX / rect.width;
    const elapsed = Math.floor(props.track.duration * percentage);

    publish("skip", { elapsed: elapsed });
    setValue(percentage);
  }

  useEffect(() => {
    const listener = (event) => {
      setValue(0);
    }
    subscribe("reset", listener)
    return () => unsubscribe("reset", listener)
  }, []);

  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={(event) => progressbarClicked(event)} value={value}>
    </progress>
  );
}

export default Progressbar;
