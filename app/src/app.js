const Tone = require("Tone");

class App {
  constructor(startSelector, stopSelector, config) {
    this.startButton = document.getElementById(startSelector);
    this.startButton.addEventListener("click", () => this.start());
    this.stopButton = document.getElementById(stopSelector);
    this.stopButton.addEventListener("click", () => this.stop());
    this.tone = new Tone.Synth(config.synth).toMaster();
    this.loop = this.setUpLoop();
    this.bassConfig = config.bass;
    this.notes = config.notes;
    this.loopDuration = config.loopDuration;
  }

  start() {
    this.loop.start(this.bassConfig.startAt);
    Tone.Transport.start();
  }

  stop() {
    this.loop.stop();
  }

  setUpLoop() {
    return new Tone.Loop((time) => {
      this.triggerAttackRelease(time);
    }, this.loopInterval);
  }

  triggerAttackRelease(time) {
    this.tone.triggerAttackRelease(
      this.notes.bassNote,
      this.bassConfig.noteDuration,
      time
    );
  }
}

module.exports = App;
