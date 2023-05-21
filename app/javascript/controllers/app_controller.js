import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["themeToggler"]

  isLightTheme = false

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme

    document
      .querySelectorAll('[data-bs-theme]')
      .forEach(el => {
        el.setAttribute('data-bs-theme', this.isLightTheme ? "light" : "dark")
      })

    const themeTogglerClasses = this.themeTogglerTarget.querySelector('button i').classList
    themeTogglerClasses.toggle('far')
    themeTogglerClasses.toggle('fas')

    console.log(themeTogglerClasses)
  }

}
