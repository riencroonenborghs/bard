import React, { Fragment, useState, useEffect } from "react";

import Constants from "../utils/constants";
import Track from "../track";

function RadioView() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = () => {
    fetch(`${Constants.host}/radio`)
      .then(response => response.json())
      .then(data => {
        setTracks(data.data);
      })
      .catch(error => {
        // Handle any errors
      });
  }
  
  return (
    <Fragment>
      <div className="p-8">
        <div className=" text-4xl uppercase text-gray-400">
          Radio
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-full pe-8">
            {tracks.map((track) =>
              <Track key={track.id} full={true} artist={track.artist} album={track.album} track={track}></Track>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RadioView;
