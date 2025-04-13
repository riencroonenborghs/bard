function secondsToMMSS(seconds) {
  let minutes = Math.floor(seconds / 60);
  if (minutes > 0) { seconds = seconds % 60; }
  return `${new String(minutes).padStart(2, "0")}:${new String(seconds).padStart(2, "0")}`;
}

export default secondsToMMSS;