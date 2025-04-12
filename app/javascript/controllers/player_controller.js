import { Controller } from "@hotwired/stimulus"
import BardPlaylist from "./BardPlaylist";
import BardPlayer from "./BardPlayer";

export default class extends Controller {
  static targets = ["pauseButton", "playButton", "playlistSize", "showPlaylistButton", "hidePlaylistButton", "playlist", "playlistItems", "playlistButtons"];

  connect() {
    // this.element.textContent = "Hello World!"
    this.player = new BardPlayer();
    this.playlist = new BardPlaylist();

    document.addEventListener("addToPlaylist", (event) => {
      const playlistItem = document.getElementsByClassName("playlist-item")[0];
      this.playlist.add(event.detail);
      this.playlistSizeTarget.innerHTML = this.playlist.size();
      this.playlistButtonsTarget.classList.remove("hidden");
      this.playlistItemsTarget.appendChild(playlistItem);
      playlistItem.classList.remove("hidden")
    });
  }

  pause (_event) {
    this.pauseButtonTarget.classList.add("hidden");
    this.playButtonTarget.classList.remove("hidden");
  }

  play (_event) {
    this.pauseButtonTarget.classList.remove("hidden");
    this.playButtonTarget.classList.add("hidden");
  }

  showPlaylist (_event) {
    this.showPlaylistButtonTarget.classList.add("hidden");
    this.hidePlaylistButtonTarget.classList.remove("hidden");
    this.playlistTarget.classList.remove("hidden");
  }

  hidePlaylist (_event) {
    this.showPlaylistButtonTarget.classList.remove("hidden");
    this.hidePlaylistButtonTarget.classList.add("hidden");
    this.playlistTarget.classList.add("hidden");
  }
}
