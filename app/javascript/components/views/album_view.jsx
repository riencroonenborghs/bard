import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";

import { publish } from "../utils/events";
import Constants from "../utils/constants";
import ArtistHeader from "../artist_header";
import AlbumIcon from "../icons/album_icon";
import Track from "../track";

function AlbumView() {
  let { albumId } = useParams();
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchAlbum(1);
  }, []);

  const fetchAlbum = () => {
    fetch(`${Constants.host}/albums/${albumId}`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data.data);
        setArtist(data.data.artist);
        setTracks(data.data.tracks);
      })
      .catch(error => {
        // Handle any errors
      });
  }
  
  return (
    <Fragment>
      <div className="p-8">
        <div className=" text-4xl uppercase text-gray-400">
          {album.title} - Tracks
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-full pe-8">
            {tracks.map((track) =>
              <Track key={track.id} full={false} artist={artist} album={album} track={track}></Track>
            )}
          </div>
          <div className="w-192">
            <div className="flex.flex-col">
              <div className="flex flex-row justify-center">
                <ArtistHeader artist={artist} size={"lg"}></ArtistHeader>
              </div>
              <div className="flex flex-row justify-center text-xl">
                {album.title}
              </div>
              <div className="flex flex-row justify-center pt-4">
                {album.cover_url &&
                  <img src={album.cover_url} className="rounded-lg w-xs" />
                }
                {!album.cover_url &&
                  <AlbumIcon size={22}></AlbumIcon>
                }
              </div>
              <div className="flex flex-row justify-center text-xs pt-2 font-thin">
                {album.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AlbumView;
