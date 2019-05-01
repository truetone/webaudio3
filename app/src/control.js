class Control {
  constructor(startId, stopId, fullScreenId) {
    this.startButton = document.getElementById(startId);
    this.stopButton = document.getElementById(stopId);
    this.fullScreenButton = document.getElementById(fullScreenId);
    this.fullScreenButton.addEventListener("click", () => this.requestFullScreen());
  }

  get startButton() {
    return this.startButton;
  }

  get stopButton() {
    return this.stopButton;
  }

  get fullScreenButton() {
    return this.fullScreenButton;
  }

  requestFullScreen() {
    this.fullScreenButton.requestFullScreen();
  }
}

module.exports = Control;
