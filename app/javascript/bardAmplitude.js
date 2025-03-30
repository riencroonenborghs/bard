import Amplitude from "amplitudejs"

const amplitude = document.getElementsByTagName("amplitude")[0];
const data = amplitude.dataset;

Amplitude.init({
  songs: [
    {
      "name": data.name,
      "artist": data.artist,
      "album": data.album,
      "url": data.url
    }
  ]
});
