import React, { useState } from "react";
import { useEffect } from 'react';

import Constants from "../utils/constants";
import Album from "../album";

function AlbumsView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [albums, setAlbums] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAlbums(1);
  }, []);

  const fetchAlbums = (currentPage) => {
    fetch(`${Constants.host}/albums?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data.data);
        setTotalPages(data.totalPages);
        setCurrentPage(data.page);
      })
      .catch(error => {
        // Handle any errors
      });
  }

  return (
    <div>
      <div className="p-8">
        <div className="text-4xl uppercase text-gray-400">Albums</div>
      </div>

      {/* = render LetterFilterComponent.new(letters: artist_letters, filter_path: "filter_artists_path") */}

      <div className="p-8 w-full grid grid-cols-4 gap-4">
        {albums.map((album) =>
          <Album key={album.id} album={album} artist={album.artist}></Album>
        )}
      </div>

      <div className="p-8">
        {Array.from(Array(totalPages).keys()).map((page) =>
          <a className={"p-4 me-2 rounded-sm " + (currentPage === (page + 1) ? "" : "bg-gray-500") } key={page} onClick={() => fetchAlbums(page + 1)}>{page + 1}</a>  
        )}
      </div>
    </div>
  );
}

export default AlbumsView;
