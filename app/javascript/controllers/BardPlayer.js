import BardDebug from "./BardDebug";
import { Howl, Howler } from "howler";

class BardPlayer {
  constructor() {
    this.currentSong = undefined;
  }

  _debug(message) { if(BardDebug) { console.info(message); } }

  // getCurrentSong() { return this.currentSong; }

  stop() {
    this._debug("stopping current song")
    if(this.isPlaying()) {
      this._debug("stopping current song - is playing")
      this.currentSong.howl.stop();
      this._debug("stopping current song - stopped")
      this.currentSong.howl = undefined;
      this._debug("stopping current song - unset")
    }
  }

  play(song) {
    this.stop();

    this._debug(`play song ${song.artist} - ${song.name}`)
    this.currentSong = song;
    if(this.currentSong.howl === undefined) {
      this._debug(`play song ${song.artist} - ${song.name} - creating player`)
      this.currentSong.howl = new Howl({
        src: [`${song.url}.${song.fileFormat}`],
        html5: true,
        // onplay: () => {},
        // onload: () => {},
        // onend: () => {},
        // onpause: () => {},
        // onstop: () => {},
        // onseek: () => {},
      });

      this.currentSong.howl.play();
    }
  }

  pause() {
    this._debug("pausing song")
    if(this.isPlaying()) {
      this._debug(`pausing song ${this.currentSong.artist} - ${this.currentSong.name}`)
      this.currentSong.howl.pause();
    }
  }

  resume() {
    this._debug("resuming song")
    if(this._isNotPlaying()) {
      this._debug(`resuming song ${this.currentSong.artist} - ${this.currentSong.name}`)
      this.currentSong.howl.play();
    }
  }

  isPlaying() { 
    return this.currentSong !== undefined &&
      this.currentSong.howl !== undefined &&
      this.currentSong.howl.playing();
  }

  _isNotPlaying() {
    return !this.isPlaying();
  }

  // seek(pct) {
  //   this._debug(`seek song to ${pct}%`)
  //   if(this.currentSong !== undefined &&
  //     this.currentSong.howl !== undefined &&      
  //     this.currentSong.duration != "") {
  //     const skipTo = this.currentSong.duration * pct;
  //     this._debug(`seek song to ${pct}% = ${skipTo}`)
  //     this.currentSong.howl.seek(skipTo);
  //   }
  // }
}

export default BardPlayer;