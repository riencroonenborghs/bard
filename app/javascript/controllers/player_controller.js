import { Controller } from "@hotwired/stimulus"
import BardPlayer from "../bard/BardPlayer";
import playlist from "../bard/BardPlaylist";

export default class extends Controller {
  static targets = [
    "main",
    "pauseButton",
    "playButton",
    "progressbar"
  ];

  connect() {
    this.player = new BardPlayer();

    document.addEventListener("play", (event) => { 
      const track = event.detail;
      this.mainTarget.classList.remove("hidden")
      this._playTrack(track);
    });

    document.addEventListener("startPlaylist", (_event) => {
      const track = playlist.get(0);
      if(track !== undefined) {
        this._playTrack(track);
      }
    });
  }

  pause (_event) {
    this.pauseButtonTarget.classList.add("hidden");
    this.playButtonTarget.classList.remove("hidden");
    this.player.pause();
  }

  play (_event) {
    this.pauseButtonTarget.classList.remove("hidden");
    this.playButtonTarget.classList.add("hidden");
    this.player.resume();
  }

  seek (event) {
    const rect = this.progressbarTarget.getBoundingClientRect();
    const percentage = event.offsetX / rect.width;

    this.progressbarTarget.value = percentage;
    this.player.seek(percentage);
    this.elapsed = Math.floor(this.player.getCurrentSong().duration * percentage);

    const tickEvent = new CustomEvent("tick", { detail: this.elapsed });
    document.dispatchEvent(tickEvent);
  }

  _playTrack(track) {
    this.player.play(track);

    this.pauseButtonTarget.classList.remove("hidden");
    this.playButtonTarget.classList.add("hidden");

    if (track.duration !== "") {
      this.progressbarTarget.classList.remove("hidden");
    } else {
      this.progressbarTarget.classList.add("hidden");
    }

    this.elapsed = 0;
    if(this.interval !== undefined) { clearInterval(this.interval); }
    this.interval = setInterval(() => {
      if (this.player.isPlaying()) {
        this.elapsed += 1;

        const tickEvent = new CustomEvent("tick", { detail: this.elapsed });
        document.dispatchEvent(tickEvent);

        if (track.duration !== "") {
          this.progressbarTarget.value = (this.elapsed / parseFloat(track.duration));
        }
      }

    }, 1000);
  }
}
