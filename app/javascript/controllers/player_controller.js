import { Controller } from "@hotwired/stimulus"
import BardPlaylist from "./BardPlaylist";
import BardPlayer from "./BardPlayer";

function ssToMMSS(ss) {
  let seconds = ss;
  let minutes = Math.floor(seconds / 60);
  if (minutes > 0) { seconds = seconds % 60; }
  return `${new String(minutes).padStart(2, "0")}:${new String(seconds).padStart(2, "0")}`;
}

export default class extends Controller {
  static targets = [
    "pauseButton",
    "playButton",
    "progressbar",
    // current track
    "currentTrackTitle",
    "currentTrackArtist",
    "currentTrackAlbum",
    "currentTrackDuration",
    "currentTrackElapsed",
    // playlist
    "playlistSize",
    "showPlaylistButton",
    "hidePlaylistButton",
    "playlistUI",
    "playlistItems",
    "playlistButtons"
  ];

  connect() {
    this.player = new BardPlayer();
    this.playlist = new BardPlaylist();

    document.addEventListener("addToPlaylist", (event) => { 
      this._addToPlaylist(event);
    });

    document.addEventListener("play", (event) => { 
      this._playTrack(event.detail);
    });

    this.playingElapsed = 0;
    this.playingInterval = undefined;
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
    this.playingElapsed = Math.floor(this.player.getCurrentSong().duration * percentage);
  }

  _addToPlaylist (event) {
    const playlistItem = document.getElementsByClassName("playlist-item")[0];
    this.playlist.add(event.detail);
    this.playlistSizeTarget.innerHTML = this.playlist.size();
    this.playlistButtonsTarget.classList.remove("hidden");
    this.playlistItemsTarget.appendChild(playlistItem);
    playlistItem.classList.remove("hidden");
  }

  _playTrack(track) {
    this._updateCurrentTrack(track);
    this._resetPlayingUI();    

    this.player.play(track);
    this.playingInterval = setInterval(() => {
      // elapsed time
      if (this.player.isPlaying()) {
        this.playingElapsed += 1;
        this.currentTrackElapsedTarget.innerHTML = ssToMMSS(this.playingElapsed);
      }
      // progressbar
      if (track.duration !== "") {
        this.progressbarTarget.value = (this.playingElapsed / parseFloat(track.duration));
      }
    }, 1000);
  }

  _updateCurrentTrack(track) {
    this.currentTrackTitleTarget.innerHTML = track.name;
    this.currentTrackArtistTarget.innerHTML = track.artist;
    this.currentTrackAlbumTarget.innerHTML = track.album;
    this.currentTrackDurationTarget.innerHTML = track.durationMMSS;
    this.currentTrackArtistTarget.setAttribute("href", track.artistUrl);
    this.currentTrackAlbumTarget.setAttribute("href", track.albumUrl);
  }

  _resetPlayingUI() {
    this.playingElapsed = 0;
    if(this.playingInterval !== undefined) { clearInterval(this.playingInterval); }
    this.currentTrackElapsedTarget.innerHTML = "00:00";
    this.progressbarTarget.value = 0;
  }

  showPlaylist (_event) {
    this.showPlaylistButtonTarget.classList.add("hidden");
    this.hidePlaylistButtonTarget.classList.remove("hidden");
    this.playlistUITarget.classList.remove("hidden");
  }

  hidePlaylist (_event) {
    this.showPlaylistButtonTarget.classList.remove("hidden");
    this.hidePlaylistButtonTarget.classList.add("hidden");
    this.playlistUITarget.classList.add("hidden");
  }
}
