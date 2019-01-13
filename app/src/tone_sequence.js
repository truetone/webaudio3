const Master = require("Tone").Master;
const Meter = require("Tone").Meter;
const Panner = require("Tone").Panner;
const Sequence = require("Tone").Sequence;
const Synth = require("Tone").Synth;

class ToneSequence {
  constructor(config, reverb, SynthClass = Synth) {
    this.meter = new Meter();
    const synth = new SynthClass(config.synth);
    const panner = new Panner(config.pan).chain(reverb, Master);

    synth.connect(panner);
    synth.connect(this.meter);
    synth.volume.value = config.volume;

    this.sequence = new Sequence((time, note) => {
      synth.triggerAttackRelease(note, config.noteInterval, time);
    }, config.noteSequence, config.noteInterval);
  }

  getLevel() {
    return this.meter.getLevel();
  }

  start(when) {
    this.sequence.start(when);
  }

  stop() {
    this.sequence.stop();
  }
}

module.exports = ToneSequence;
