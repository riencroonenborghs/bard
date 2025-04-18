import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router";

function Menu(props) {
  const [artistCount, setArtistCount] = useState(0);
  const [albumCount, setAlbumCount] = useState(0);
  const [trackCount, setTrackCount] = useState(0);

  const style = {
    height: "calc(100vh)"
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = () => {
    const counts = document.getElementById("counts");
    setArtistCount(counts.dataset.artist);
    setAlbumCount(counts.dataset.album);
    setTrackCount(counts.dataset.track);
  }

  return (
    <div className="w-64 bg-gray-600 text-white" style={style}>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-center pt-8">
          <Link to="/">
            <div className="text-4xl uppercase text-gray-400 font-bold">
              Bard
            </div>
          </Link>
        </div>

        <div className="p-8">
          <div className="text-lg uppercase text-gray-500">
            menu
          </div>
        </div>

        <Link to="/artists" className="ps-8 pe-8 pt-2 pb-2">
          <div className="flex flex-row justify-between items-center">
            <div>Artists</div>
            <div className="rounded-lg shadow-sm bg-gray-700 text-xs p-1 font-thin">
              {artistCount}
            </div>
          </div>
        </Link>

        <Link to="/albums" className="ps-8 pe-8 pt-2 pb-2">
          <div className="flex flex-row justify-between items-center">
            <div>Albums</div>
            <div className="rounded-lg shadow-sm bg-gray-700 text-xs p-1 font-thin">
              {albumCount}
            </div>
          </div>
        </Link>

        <Link to="/tracks" className="ps-8 pe-8 pt-2 pb-2">
          <div className="flex flex-row justify-between items-center">
            <div>Tracks</div>
            <div className="rounded-lg shadow-sm bg-gray-700 text-xs p-1 font-thin">
              {trackCount}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu
