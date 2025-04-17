import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";

import Album from "../album";

function ArtistView() {
  let { artistId } = useParams();
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchArtist(1);
  }, []);

  const fetchArtist = () => {
    fetch(`http://localhost:5000/artists/${artistId}`)
      .then(response => response.json())
      .then(data => {
        setArtist(data.data);
        setAlbums(data.data.albums);
      })
      .catch(error => {
        // Handle any errors
      });
  }
  
  return (
    <Fragment>
      <div className="p-8 flex flex-row">
        <div className="text-4xl text-gray-400 uppercase me-4">
          Artist
        </div>
        <div className="text-4xl text-gray-400">
          {artist.name}
        </div>
      </div>

      <div className="p-8 pt-0">
        <div className="text-2xl uppercase text-gray-400 pb-4">
            Albums
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          {albums.map((album) =>
            <Album key={album.id} album={album} artist={artist}></Album>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default ArtistView;
