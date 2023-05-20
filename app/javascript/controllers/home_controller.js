import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["text"]
  changeText() {
    this.textTarget.innerText = "helloword";
  }
}
