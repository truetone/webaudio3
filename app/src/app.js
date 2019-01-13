const Tone = require("Tone").Synth;

class App {
  constructor(selector) {
    this.elem = document.getElementById(selector);
    this.elem.addEventListener("click", () => this.clickHandler());
    this.tone = new Tone().toMaster();
  }

  clickHandler() {
    // play a middle 'C' for the duration of an 8th note
    this.tone.triggerAttackRelease("C4", "8n");
  }
}

module.exports = App;
