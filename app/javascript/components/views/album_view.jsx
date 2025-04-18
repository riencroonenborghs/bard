import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";
import globalEventEmitter from "../utils/events";

import ArtistHeader from "../artist_header";
import AlbumIcon from "../icons/album_icon";
import PlayIcon from "../icons/play_icon";
import QueueIcon from "../icons/queue_icon";

function AlbumView() {
  let { albumId } = useParams();
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchAlbum(1);
  }, []);

  const fetchAlbum = () => {
    fetch(`http://localhost:5000/albums/${albumId}`)
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

  const play = (track) => {
    const event = new CustomEvent("play", { detail: { artist: artist, album: album, track: track } });
    globalEventEmitter.dispatchEvent(event);
  }

  const addToPlaylist = (track) => {
    console.log("addToPlaylist");
    console.log(track);
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
              <div key={track.id} className="flex flex-row justify-between border-b border-gray-700 p-3 hover:bg-gray-900">
                <div className="flex flex-row">
                  <div className="w-16 flex flex-row justify-center items-center">
                    <a className="cursor-pointer" onClick={() => play(track)}>
                      <PlayIcon size={4}></PlayIcon>
                    </a>
                  </div>
                  <div className="w-16 flex flex-row justify-center items-center">
                    <a className="cursor-pointer" onClick={() => addToPlaylist(track)}>
                      <QueueIcon size={4}></QueueIcon>
                    </a>
                  </div>
                  <div className="w-16 flex flex-row justify-center items-center">
                    {track.position}
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    {track.title}
                  </div>
                </div>
              </div>
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
