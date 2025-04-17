import React from "react";
import { useParams } from "react-router";

function AlbumView() {
  let { albumId } = useParams();
  
  return (
    <div>
      Album {albumId} goes here
    </div>
  );
}

export default AlbumView;
