import debugMessage from "./BardDebug";
import { Howl, Howler } from "howler";

class BardPlayer {
  constructor() {
    this.currentSong = undefined;
  }

  getCurrentSong() { return this.currentSong; }

  stop() {
    if(this.isPlaying()) {
      debugMessage("stopping current song - is playing")
      this.currentSong.howl.stop();
      debugMessage("stopping current song - stopped")
      this.currentSong.howl = undefined;
      debugMessage("stopping current song - unset")
    }
  }

  play(song) {
    this.stop();

    debugMessage(`play song ${song.artist} - ${song.name}`)
    this.currentSong = song;
    if(this.currentSong.howl === undefined) {
      debugMessage(`play song ${song.artist} - ${song.name} - creating player`)
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

      debugMessage(`play song ${song.artist} - ${song.name} - play`)
      this.currentSong.howl.play();
    }
  }

  pause() {
    if(this.isPlaying()) {
      debugMessage(`pausing song ${this.currentSong.artist} - ${this.currentSong.name}`)
      this.currentSong.howl.pause();
    }
  }

  resume() {
    if(this._isNotPlaying()) {
      debugMessage(`resuming song ${this.currentSong.artist} - ${this.currentSong.name}`)
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

  seek(percentage) {
    debugMessage(`seek song to ${percentage}%`)
    if(this.currentSong !== undefined &&
      this.currentSong.howl !== undefined &&      
      this.currentSong.duration != "") {
      const skipTo = this.currentSong.duration * percentage;
      debugMessage(`seek song to ${percentage}% => ${skipTo}`)
      this.currentSong.howl.seek(skipTo);
    }
  }
}

export default BardPlayer;
