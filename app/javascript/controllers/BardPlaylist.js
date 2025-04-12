import BardDebug from "./BardDebug";

class BardPlaylist {
  constructor() {
    this.list = [];
  }

  _debug(message) { if(BardDebug) { console.info(message); } }

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

export default BardPlaylist;