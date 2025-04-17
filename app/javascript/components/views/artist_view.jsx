import React from "react";
import { useParams } from "react-router";

function ArtistView() {
  let { artistId } = useParams();
  
  return (
    <div>
      Artist {artistId} goes here
    </div>
  );
}

export default ArtistView;
