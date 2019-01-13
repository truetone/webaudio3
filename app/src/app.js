const tone = require("tone");

class App {
  constructor(selector) {
    this.elem = document.getElementById(selector);
    this.elem.addEventListener("click", () => this.clickHandler);
    this.tone = new tone.Synth().toMaster();
  }

  clickHandler() {
    this.tone.start();
    // play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  }
}

module.exports = App;
