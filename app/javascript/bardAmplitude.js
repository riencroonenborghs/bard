// import Amplitude from "amplitudejs"
import { Howl, Howler } from "howler"

class BardPlayer {
  constructor() {
    this.playlist = [];
    this.playingIndex = 0;
    this.playingInterval = undefined;
    this.playingSeconds = 0;
    this.debug = true;
  }

  _debug(message) {
    if(this.debug) {
      console.info(message);
    }
  }

  getPlaylist() { return this.playlist; }

  addSource(source) {
    this.playlist = this.playlist.concat([source]);
  }

  stopAll() {
    this.playlist.forEach((source) => {
      if(source.howl !== undefined && source.howl.playing()) {
        source.howl.stop();
      }
    });

    clearInterval(this.playingInterval);
    this.playingInterval = undefined;
    this.playingSeconds = 0;
  }

  play(playingIndex = undefined) {
    this.stopAll();

    // Find the playingIndex 
    if (playingIndex !== undefined) { this.playingIndex = playingIndex; }    
    const source = this.playlist[this.playingIndex];

    // If no Howl object is found, create it.
    // Only create the Howl object when playing the song.
    // We don't want to load all data when we're adding things to a playlist.
    if(source.howl === undefined) {
      source.howl = new Howl({
        src: [`${source.url}.opus`],
        html5: true,
        onplay: () => {
          // toggle pause/play buttons
          const pause = document.getElementsByClassName("bardplayer-contoller--pause")[0];
          const play = document.getElementsByClassName("bardplayer-contoller--play")[0];
          pause.classList.remove("hidden");
          play.classList.add("hidden");

          this._trackProgress();
        },
        onload: () => {},
        onend: () => {},
        onpause: () => {
          // toggle pause/play buttons
          const pause = document.getElementsByClassName("bardplayer-contoller--pause")[0];
          const play = document.getElementsByClassName("bardplayer-contoller--play")[0];
          pause.classList.add("hidden");
          play.classList.remove("hidden");

          clearInterval(this.playingInterval);
        },
        onstop: () => {},
        onseek: () => {},
      })
    }
    
    source.howl.play()
  }

  _trackProgress() {
    this.playingInterval = setInterval(() => {
      // timer
      const played = document.getElementsByClassName("bardplayer-duration--minutes")[0];
      if (played !== undefined) {
        this.playingSeconds += 1;
        played.innerHTML = this._playingHHMM();  
      }
      // progress bar
      const source = this.playlist[this.playingIndex];
      if (source.duration !== "") {
        const progress = document.getElementsByClassName("bardplayer-progress")[0];
        progress.value = (this.playingSeconds / parseFloat(source.duration));
      }
    }, 1000);
  }

  // seconds into hh:mm
  _playingHHMM () {
    let seconds = this.playingSeconds;
    let minutes = Math.floor(seconds / 60);
    if (minutes > 0) {
      seconds = seconds % 60;
    }
    return `${new String(minutes).padStart(2, "0")}:${new String(seconds).padStart(2, "0")}`;
  }

  resume() {
    const source = this.playlist[this.playingIndex];
    if(source.howl !== undefined && !source.howl.playing()) { source.howl.play(); }
    else { this.play() }
  }

  pause() {
    const source = this.playlist[this.playingIndex];
    if(source.howl !== undefined && source.howl.playing()) { source.howl.pause(); }
  }

  seek(pct) {
    const source = this.playlist[this.playingIndex];
    if(source.howl !== undefined && source.howl.playing()) {
      source.howl.seek(source.howl.duration() * pct);
    }
  }
}

const bardPlayer = new BardPlayer();

document.addEventListener("playSong", (event) => {
  bardPlayer.addSource(event.detail);
  bardPlayer.play(
    bardPlayer.getPlaylist().length - 1
  );

  const pause = document.getElementsByClassName("bardplayer-contoller--pause")[0];
  const play = document.getElementsByClassName("bardplayer-contoller--play")[0];

  pause.addEventListener("click", () => { bardPlayer.pause(); });
  play.addEventListener("click", () => { bardPlayer.resume(); });
});

