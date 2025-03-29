import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  dismiss (event) {
    let alert = event.target.closest(".alert");
    alert.classList.add("hidden")
    event.preventDefault();
  }
}
