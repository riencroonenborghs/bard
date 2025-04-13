import { Controller } from "@hotwired/stimulus"
import secondsToMMSS from "../bard/BardUtils";

export default class extends Controller {
  static targets = [
    "title",
    "artist",
    "album",
    "duration",
    "durationDash",
    "elapsed",
    "coverImage",
    "coverImageElement",
    "coverIcon"
  ];

  connect() {
    document.addEventListener("play", (event) => {
      this.elapsedTarget.innerHTML = "00:00";

      if(event.detail.duration !== "") {
        this.durationDashTarget.classList.remove("hidden");
        this.durationTarget.classList.remove("hidden");
      } else {
        this.durationDashTarget.classList.add("hidden");
        this.durationTarget.classList.add("hidden");
      }

      this.titleTarget.innerHTML = event.detail.name;
      this.artistTarget.innerHTML = event.detail.artist;
      this.albumTarget.innerHTML = event.detail.album;
      this.durationTarget.innerHTML = event.detail.durationMMSS;
      this.artistTarget.setAttribute("href", event.detail.artistUrl);
      this.albumTarget.setAttribute("href", event.detail.albumUrl);

      if(event.detail.cover !== "") {
        this.coverImageTarget.classList.remove("hidden");
        this.coverIconTarget.classList.add("hidden");
        this.coverImageElementTarget.setAttribute("src", event.detail.cover);
      } else {
        this.coverImageTarget.classList.add("hidden");
        this.coverIconTarget.classList.remove("hidden");
      }
    });

    document.addEventListener("tick", (event) => {
      this.elapsedTarget.innerHTML = secondsToMMSS(event.detail);
    });
  }
}
