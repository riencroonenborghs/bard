import { Howl, Howler } from "howler"

const bardDebug = true;

class BardPlaylist {
  constructor() {
    this.list = [];
  }

  _debug(message) { if(bardDebug) { console.info(message); } }

  clear() { 
    this._debug("clearing playlist");
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  add(song) {
    this._debug(`adding song ${song.artist} - ${song.name}`);
    const found = this.list.find((item) => item.url === song.url);
    if(!found) { this.list.push(song); }
  }

  remove(index) {
    this._debug(`removing song at ${index}`);
    this.list.splice(index, 1);
  }

  get(index) {
    return this.list[index];
  }
}

class BardPlayer {
  constructor() {
    this.currentSong = undefined;
  }

  _debug(message) { if(bardDebug) { console.info(message); } }

  getCurrentSong() { return this.currentSong; }

  stop() {
    this._debug("stopping current song")
    if(this.currentSong !== undefined &&
        this.currentSong.howl !== undefined &&
        this.currentSong.howl.playing()) {
      this._debug("stopping current song - is playing")
      this.currentSong.howl.stop();
      this._debug("stopping current song - stopped")
      this.currentSong.howl = undefined;
      this._debug("stopping current song - unset")
    }
  }

  play(song) {
    this._debug(`play song ${song.artist} - ${song.name}`)
    this.currentSong = song;
    if(this.currentSong.howl === undefined) {
      this._debug(`play song ${song.artist} - ${song.name} - creating player`)
      this.currentSong.howl = new Howl({
        src: [`${song.url}.${song.fileFormat}`],
        html5: true,
        onplay: () => {},
        onload: () => {},
        onend: () => {},
        onpause: () => {},
        onstop: () => {},
        onseek: () => {},
      });

      this.currentSong.howl.play();
    }
  }

  pause() {
    this._debug("pausing song")
    if(this.currentSong !== undefined &&
        this.currentSong.howl !== undefined &&
        this.currentSong.howl.playing()) {
      this._debug(`pausing song ${this.currentSong.artist} - ${this.currentSong.name}`)
      this.currentSong.howl.pause();
    }
  }

  resume() {
    this._debug("resuming song")
    if(this.currentSong !== undefined &&
        this.currentSong.howl !== undefined &&
        !this.currentSong.howl.playing()) {
      this._debug(`resuming song ${this.currentSong.artist} - ${this.currentSong.name}`)
      this.currentSong.howl.play();
    }
  }

  seek(pct) {
    this._debug(`seek song to ${pct}%`)
    if(this.currentSong !== undefined &&
      this.currentSong.howl !== undefined &&      
      this.currentSong.duration != "") {
      const skipTo = this.currentSong.duration * pct;
      this._debug(`seek song to ${pct}% = ${skipTo}`)
      this.currentSong.howl.seek(skipTo);
    }
  }
}

class BardUI {
  constructor(bardPlayer) {
    this.bardPlayer = bardPlayer;
    this.pauseButton = document.getElementsByClassName("bardplayer-contoller--pause")[0];
    this.playButton = document.getElementsByClassName("bardplayer-contoller--play")[0];
    
    this.elapsedElt = document.getElementsByClassName("bardplayer-duration--elapsed")[0];
    this.elapsed = 0;
    this.elapsedPaused = false;

    this.progressbar = document.getElementsByClassName("bardplayer-progressbar")[0];

    this._addEventsListeners();
    this._trackElapsed();
  }

  _debug(message) { if(bardDebug) { console.info(message); } }

  _addEventsListeners() {
    this._debug("adding event listeners");
    this.pauseButton.addEventListener("click", () => { this._pause(); });
    this.playButton.addEventListener("click", () => { this._resume(); });
    if(this.progressbar !== undefined) {
      this.progressbar.addEventListener("click", (event) => { this._seek(event); });
    }
  }

  _trackElapsed() {
    this.interval = setInterval(() => {
      // console.log(this.bardPlayer.getCurrentSong().howl.seek())
      // timer
      if (this.elapsedElt !== undefined && !this.elapsedPaused) {
        this.elapsed += 1;
        this.elapsedElt.innerHTML = this._formattedElapsed();
      }
      // progressbar
      if (this.bardPlayer !== undefined &&
          this.bardPlayer.getCurrentSong() != undefined &&
          this.bardPlayer.getCurrentSong().duration !== "" &&
          this.progressbar !== undefined) {
        this.progressbar.value = (this.elapsed / parseFloat(this.bardPlayer.getCurrentSong().duration));
      }
    }, 1000);
  }

  _formattedElapsed() {
    let seconds = this.elapsed;
    let minutes = Math.floor(seconds / 60);
    if (minutes > 0) { seconds = seconds % 60; }
    return `${new String(minutes).padStart(2, "0")}:${new String(seconds).padStart(2, "0")}`;
  }

  _pause() {
    this._debug("pausing UI");
    this.bardPlayer.pause();
    this.pauseButton.classList.add("hidden");
    this.playButton.classList.remove("hidden");
    this.elapsedPaused = true;
  }

  _resume() {
    this._debug("resuming UI");
    this.bardPlayer.resume();
    this.pauseButton.classList.remove("hidden");
    this.playButton.classList.add("hidden");
    this.elapsedPaused = false;
  }

  _seek(event) {
    if (this.bardPlayer !== undefined &&
        this.bardPlayer.getCurrentSong() != undefined &&
        this.bardPlayer.getCurrentSong().duration !== "" &&
        this.progressbar !== undefined) {
      const rect = this.progressbar.getBoundingClientRect();
      const pct = event.offsetX / rect.width;

      this.progressbar.value = pct;
      this.bardPlayer.seek(pct);
      this.elapsed = this.bardPlayer.getCurrentSong().duration * pct;
    }
  }
}

const bardPlayer = new BardPlayer();
const bardPlaylist = new BardPlaylist();

document.addEventListener("clearPlaylist", (event) => {
  bardPlaylist.clear();
});

document.addEventListener("addSong", (event) => {
  bardPlaylist.add(event.detail);
});

document.addEventListener("removeSong", (event) => {
  bardPlaylist.remove(event.detail.index);
});

document.addEventListener("playLastAddedSong", (event) => {
  const song = bardPlaylist.get(bardPlaylist.size() - 1);
  bardPlayer.stop();
  bardPlayer.play(song);
  new BardUI(bardPlayer);
});

document.addEventListener("playSong", (event) => {
  const song = bardPlaylist.get(event.detail.index);
  bardPlayer.stop();
  bardPlayer.play(song);
  new BardUI(bardPlayer);
});

