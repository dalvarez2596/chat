import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  reset() {
    console.log("Resetting form... porque no entra");
    this.element.reset();
  }
}
