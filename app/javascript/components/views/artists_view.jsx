import React, { useState } from "react";
import Artist from "../artist";

function ArtistsView() {
  const [page, setPage] = useState(1);

  const fetchArtists = (page) => {
    setPage(page)
  }

  const artists = [
    { id: 1, url: "1", name: "Some Name", albumCount: 1 },
    { id: 2, url: "2", name: "Some Name 2", albumCount: 2 }
  ];

  return (
    <div>
      <div className="p-8">
        <div className="text-4xl uppercase text-gray-400">Artists</div>
      </div>

      {page}
      {/* = render LetterFilterComponent.new(letters: artist_letters, filter_path: "filter_artists_path") */}

      <div className="p-8 w-full grid grid-cols-4 gap-4">
        {artists.map((artist) =>
          <Artist key={artist.id} artist={artist}></Artist>
        )}
      </div>

      <div className="p-8">
        <a onClick={() => fetchArtists(12)}>here</a>
        = paginate @artists
      </div>
    </div>
  );
}

export default ArtistsView;
