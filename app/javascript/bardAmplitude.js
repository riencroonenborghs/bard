import Amplitude from "amplitudejs"

document.addEventListener("playSong", (event) => {
  Amplitude.stop();
  Amplitude.init({
    debug: true,
    callbacks: {
      initialized: () => {
        console.log("initialized")
      },
      song_change: () => {
        console.log("song_change")
      }
    },
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

  const progressElt = document.getElementById("song-played-progress");
  const setProgress = function(e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    const pct =  (parseFloat(x) / parseFloat(this.offsetWidth)) * 100;
    // Amplitude.setSongPlayedPercentage(pct);
    Amplitude.setSongPlayedPercentage(15.0)
  }
  progressElt.removeEventListener("click", setProgress);
  progressElt.addEventListener("click",  setProgress);
});


