import React, { useState } from "react";

import { publish } from "./utils/events";

function Progressbar(props) {
  const [value, setValue] = useState(0);

  const progressbarClicked = (event) => {
    const rect = event.nativeEvent.target.getBoundingClientRect();
    const percentage = event.nativeEvent.offsetX / rect.width;
    const elapsed = Math.floor(props.track.duration * percentage);

    publish("skip", { elapsed: elapsed });
    setValue(percentage);
  }

  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={(event) => progressbarClicked(event)} value={value}>
    </progress>
  );
}

export default Progressbar;
