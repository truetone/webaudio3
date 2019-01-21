const transpose = require("music-fns").transpose;
const Interval = require("music-fns").Interval;

class Chord {
  constructor(root) {
    this.root = root;
  }

  get major() {
    return [
      this.root,
      transpose(this.root, Interval.MAJOR_THIRD),
      transpose(this.root, Interval.PERFECT_FIFTH),
      transpose(this.root, Interval.PERFECT_OCTAVE)
    ];
  }

  get minor() {
    return [
      this.root,
      transpose(this.root, Interval.MINOR_THIRD),
      transpose(this.root, Interval.PERFECT_FIFTH),
      transpose(this.root, Interval.PERFECT_OCTAVE)
    ];
  }

  get minorAugmented() {
    return [
      this.root,
      transpose(this.root, Interval.MAJOR_THIRD),
      transpose(this.root, Interval.AUGMENTED_FIFTH),
      transpose(this.root, Interval.MINOR_SEVENTH),
      transpose(this.root, Interval.PERFECT_OCTAVE)
    ];
  }
}

module.exports = Chord;
