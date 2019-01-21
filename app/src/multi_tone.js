const Synth = require("Tone").PolySynth;

class MultiTone {
  constructor(notes, volume = 0) {
    this.synth = new Synth(notes.length).toMaster();
    this.synth.volume.value = volume;
    this.notes = notes;
  }

  play() {
    this.synth.triggerAttack(this.notes);
  }

  stop() {
    this.synth.triggerRelease(this.notes);
  }
}

module.exports = MultiTone;
