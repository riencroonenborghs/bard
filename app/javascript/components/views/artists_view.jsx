import React, { useState } from "react";
import { useEffect } from 'react';

import Artist from "../artist";

function ArtistsView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [artists, setArtists] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArtists(1);
  }, []);

  const fetchArtists = (currentPage) => {
    fetch(`http://localhost:5000/artists?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setArtists(data.data);
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
        <div className="text-4xl uppercase text-gray-400">Artists</div>
      </div>

      {/* = render LetterFilterComponent.new(letters: artist_letters, filter_path: "filter_artists_path") */}

      <div className="p-8 w-full grid grid-cols-4 gap-4">
        {artists.map((artist) =>
          <Artist key={artist.id} artist={artist}></Artist>
        )}
      </div>

      <div className="p-8">
        {Array.from(Array(totalPages).keys()).map((page) =>
          <a className={"p-4 me-2 rounded-sm " + (currentPage === (page + 1) ? "" : "bg-gray-500") } key={page} onClick={() => fetchArtists(page + 1)}>{page + 1}</a>  
        )}
      </div>
    </div>
  );
}

export default ArtistsView;
