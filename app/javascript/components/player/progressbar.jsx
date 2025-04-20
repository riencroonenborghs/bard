import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { seek } from "../reducers/player_slice";

function Progressbar(props) {
  // const [value, setValue] = useState(0);
  const track = useSelector((state) => state.track.track);
  const percentage = useSelector((state) => state.player.percentage);
  const dispatch = useDispatch();

  const progressbarClicked = (event) => {
    const rect = event.nativeEvent.target.getBoundingClientRect();
    const percentage = event.nativeEvent.offsetX / rect.width;
    const elapsed = Math.floor(track.duration * percentage);
    
    dispatch(
      seek({
        elapsed: elapsed,
        percentage: percentage
      })
    );
    // publish("player-seek", { elapsed: elapsed });
    // setValue(percentage);
  }

  // useEffect(() => {
  //   const listener = (event) => {
  //     setValue(0);
  //   }
  //   subscribe("player-reset", listener)
  //   return () => unsubscribe("player-reset", listener)
  // }, []);

  // useEffect(() => {
  //   const listener = (event) => {
  //     setValue(event.detail.percentage);
  //   }
  //   subscribe("player-progressbar-percentage", listener)
  //   return () => unsubscribe("player-progressbar-percentage", listener)
  // }, []);

  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={progressbarClicked} value={percentage}>
    </progress>
  );
}

export default Progressbar;
