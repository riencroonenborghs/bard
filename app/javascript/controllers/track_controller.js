import { Controller } from "@hotwired/stimulus"
import player from "./BardPlayer";
import secondsToMMSS from "./BardUtils";

export default class extends Controller {
  static targets = [
    "title",
    "artist",
    "album",
    "duration",
    "elapsed",
    "coverImage",
    "coverImageElement",
    "coverIcon",
  ];

  connect() {
    document.addEventListener("play", (event) => {
      this.elapsedTarget.innerHTML = "00:00";

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
