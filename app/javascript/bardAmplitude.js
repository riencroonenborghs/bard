import Amplitude from "amplitudejs"

document.addEventListener("playSong", (event) => {
  Amplitude.stop();
  Amplitude.init({
    songs: [
      {
        "name": event.detail.name,
        "artist": event.detail.artist,
        "album": event.detail.album,
        "url": event.detail.url
      }
    ]
  });
  Amplitude.play();
});
