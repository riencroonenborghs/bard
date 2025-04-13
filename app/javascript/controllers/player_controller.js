import { Controller } from "@hotwired/stimulus"
import BardPlayer from "./BardPlayer";

export default class extends Controller {
  static targets = [
    "pauseButton",
    "playButton",
    "progressbar"
  ];

  connect() {
    this.player = new BardPlayer();

    document.addEventListener("play", (event) => { 
      const track = event.detail;
      this.player.play(track);

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
}
