import debugMessage from "./BardDebug";

class BardPlaylist {
  constructor() {
    this.list = [];
  }

  clear() { 
    debugMessage("clearing playlist");
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  add(song) {
    debugMessage(`add song ${song.artist} - ${song.name}`);
    const found = this.list.find((item) => item.url === song.url);
    if(!found) { this.list.push(song); }
  }

  remove(index) {
    debugMessage(`remove song at ${index}`);
    this.list.splice(index, 1);
  }

  get(index) {
    return this.list[index];
  }

  
}

const playlist = new BardPlaylist();

export default playlist;