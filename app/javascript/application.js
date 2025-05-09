import "@hotwired/turbo-rails"
import "./controllers"
import "./components/app"

// Turborails does not update the browser's URL when you click around.
document.addEventListener("turbo:click", (event) => {
  const url = event.detail.url;
  const pushState = { url: url };
  if(url.match(/add_to_playlist/) === null) {
    window.history.pushState(pushState, "", url);
  }
})

// Turborails does not update the browser's title when you click around.
document.addEventListener("turbo:frame-render", (event) => {
  const stream = event.detail.fetchResponse.responseHTML.then((data) => {
    const div = document.createElement("div");
    div.innerHTML = data;
    const metaTitle = div.getElementsByTagName("meta_title")[0];
    if (metaTitle !== undefined) {
      const title = metaTitle.innerHTML;
      document.title = `Bard - ${title}`;
    }
  });
});
