const Tone = require("Tone");

class App {
  constructor(selector) {
    this.elem = document.getElementById(selector);
    this.elem.addEventListener("click", () => this.clickHandler());
    this.tone = new Tone.Synth().toMaster();
    this.loop = this.setUpLoop();
  }

  clickHandler() {
    // play a middle 'C' for the duration of an 8th note
    this.play("C4", "8n");
  }

  play(note, duration) {
    this.loop.start("1m").stop("4m");
    Tone.Transport.start();
  }

  setUpLoop() {
    // play a note every quarter-note
    return new Tone.Loop((time) => {
      this.tone.triggerAttackRelease("C2", "8n", time);
    }, "4n");
  }
}

module.exports = App;
