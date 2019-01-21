const App = require("./app");

const chordConfig = {
  root: "E2",
  volume: -15
};

const synthSineConfigOne = {
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 2.0,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
};

const synthSineConfigTwo = {
  oscillator: {
    type: "square"
  },
  envelope: {
    attack: 0.9,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
};

const duoSynthOneConfig = {
  vibratoAmount: 0.5,
  vibratoRate: 5,
  harmonicity: 1.5,
  voice0: {
    volume: -90,
    portamento: 0,
    oscillator: {
      type: "sawtooth"
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.5
    },
    envelope: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  },
  voice1: {
    volume: -90,
    portamento: 0,
    oscillator: {
      type: "triangle"
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.5
    },
    envelope: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  }
};

const synthTriangleConfig = {
  oscillator: {
    type: "triangle"
  },
  envelope: {
    attack: 0.5,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
};

const mainNoteSequence = [
  "D4",
  "E4",
  "G#4",
  [
    "G#4",
    "E4",
    "D4"
  ],
  "E4",
  "D4",
  "C4",
  "B4",
  [
    "E4",
    "G#4",
    "E4",
    [
      "D4",
      "E4",
      "G#4"
    ],
    "D4",
    "C4",
    "B4"
  ],
  "D4",
  "B4",
  "A4",
  [
    "E3",
    "G#3",
    "D3",
    "G#4"
  ],
  "E3",
  "G#3",
  "D3",
  "G#4",
  [
    "D3",
    "E3",
    "F#3",
    "G3"
  ]
];

const sequenceOneConfig = {
  synth: synthSineConfigOne,
  pan: -0.8,
  noteInterval: "8n",
  playbackRate: 1.0,
  noteSequence: mainNoteSequence,
  volume: -20
};

const sequenceTwoConfig = {
  synth: synthTriangleConfig,
  pan: 0.8,
  noteInterval: "8n",
  playbackRate: 0.8,
  noteSequence: mainNoteSequence,
  volume: -20
};

const sequenceThreeConfig = {
  synth: synthSineConfigTwo,
  pan: -0.3,
  noteInterval: "8n",
  playbackRate: 0.6,
  noteSequence: mainNoteSequence,
  volume: -30
};

const sequenceFourConfig = {
  synth: duoSynthOneConfig,
  pan: 0.3,
  noteInterval: "8n",
  playbackRate: 0.4,
  noteSequence: mainNoteSequence,
  volume: -30
};

const reverbConfig = {
  "decay": 0.5,
  "roomSize": 0.8,
  "wet": 0.4
};

const config = {
  bpm: 10,
  loopInterval: "4n",
  reverb: reverbConfig,
  barElementIds: [
    "bar-one",
    "bar-two",
    "bar-three",
    "bar-four"
  ],
  chord: chordConfig,
  sequenceOne: sequenceOneConfig,
  sequenceTwo: sequenceTwoConfig,
  sequenceThree: sequenceThreeConfig,
  sequenceFour: sequenceFourConfig
};

const app = new App("start-button", "stop-button", config);
console.log(app);
