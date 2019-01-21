const Bar = require("./bar");
const Chord = require("./chord");
const Interval = require("music-fns").Interval;
const MultiTone = require("./multi_tone");
const Reverb = require("Tone").Freeverb;
const Tone = require("Tone");
const ToneSequence = require("./tone_sequence");
const Transport = require("Tone").Transport;
const transpose = require("music-fns").transpose;

class App {
  constructor(startSelector, stopSelector, config) {
    const reverb = new Reverb(config.reverb);

    // UI
    this.startButton = document.getElementById(startSelector);
    this.startButton.addEventListener("click", () => this.start());
    this.stopButton = document.getElementById(stopSelector);
    this.stopButton.addEventListener("click", () => this.stop());

    // Tone
    this.partL = new ToneSequence(config.sequenceOne, reverb);
    this.partL.playbackRate = config.sequenceOne.playbackRate;
    this.partR = new ToneSequence(config.sequenceTwo, reverb);
    this.partR.playbackRate = config.sequenceTwo.playbackRate;
    this.partCenter = new ToneSequence(config.sequenceThree, reverb);
    this.partCenter.playbackRate = config.sequenceThree.playbackRate;
    this.duoPartOne = new ToneSequence(config.sequenceFour, reverb);
    this.intervalId = null;
    this.bars = new Bar(config.barElementIds);
    this.chordOne = new MultiTone(new Chord(config.chord.root).minor, config.chord.volume);
    this.chordTwo = new MultiTone(new Chord(transpose(config.chord.root, Interval.OCTAVE)).minor, config.chord.volume);
    Transport.bpm.value = config.bpm;
    this.transport = Transport;
  }

  start() {
    this.partL.start();
    this.partR.start();
    this.partCenter.start();
    this.duoPartOne.start();
    this.chordOne.play();
    this.chordTwo.play();
    this.transport.start();
    this.poll();
  }

  stop() {
    this.chordOne.stop();
    this.chordTwo.stop();
    this.transport.stop();
    clearInterval(this.intervalId);
  }

  poll() {
    this.intervalId = this.startPolling();
  }

  startPolling() {
    return setInterval(() => {
      this.bars.synthNames.forEach((name, idx) => {
        this.animate(idx, name);
      });
    }, 10);
  }

  animate(idx, name) {
    this.transport.schedule((time) => {
      Tone.Draw.schedule(() => {
        this.bars.setHeight(idx, this.getBarLevel(name));
      }, time);
    }, "+0.5");
  }

  getBar(name) {
    return this[name];
  }

  getBarLevel(name, seconds = this.getSeconds()) {
    return this.getBar(name).getLevel(seconds);
  }

  getSeconds() {
    return this.transport.getSecondsAtTime();
  }
}

module.exports = App;
