class Bar {
  constructor(ids) {
    this.elements = ids.map(id => document.getElementById(id));
    this.synthNames = this.elements.map(elem => elem.dataset.synthName);
  }

  setHeight(elemIndex, levelValue) {
    this.elements[elemIndex].style.height = levelValue * -2 + "%";
  }
}

module.exports = Bar;
