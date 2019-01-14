const App = require("./app");
const notes = {
  bassNote: "C2"
};

const synthConfig = {
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
};

const config = {
  notes: notes,
  bass: {
    startAt: "1m",
    endAt: "4m",
    noteDuration: "8n"
  },
  loopInterval: "4n",
  synth: synthConfig
};

const app = new App("start-button", "stop-button", config);
console.log(app);
