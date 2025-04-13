import { Controller } from "@hotwired/stimulus"
import BardPlaylist from "../bard/BardPlaylist";

export default class extends Controller {
  static targets = [
    "playlist",
    "size",
    "showButtons",
    "hideButtons",
    "items",
    "buttons"
  ];

  connect() {
    this.playlist = new BardPlaylist();

    document.addEventListener("play", (event) => {
      this.playlist.clear();
    })

    document.addEventListener("addToPlaylist", (event) => { 
      console.log('qwe')
      const playlistItem = document.getElementsByClassName("playlist-item")[0];
      this.playlist.add(event.detail);
      this.sizeTarget.innerHTML = this.playlist.size();
      this.buttonsTarget.classList.remove("hidden");
      this.itemsTarget.appendChild(playlistItem);
      playlistItem.classList.remove("hidden");
    });
  }

  show (_event) {
    this.showButtonsTarget.classList.add("hidden");
    this.hideButtonsTarget.classList.remove("hidden");
    this.playlistTarget.classList.remove("hidden");
  }

  hide (_event) {
    this.showButtonsTarget.classList.remove("hidden");
    this.hideButtonsTarget.classList.add("hidden");
    this.playlistTarget.classList.add("hidden");
  }
}
