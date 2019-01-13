const App = require("../src/app");
const tone = require("tone");
jest.mock("tone");

describe("Triggering a tone", () => {
  // This test is passing but not valid. It's impossible to spy on or mock Tone
  // since the web audio api is not supported in JSDOM
  test("Clicking a button that matches the selector for UI should trigger a app.clickHandler)", () => {
    document.body.innerHTML = "<!DOCTYPE html><button id=\"test-button\">Test Button</button>";
    const button = document.getElementById("test-button");
    const app = new App("test-button");
    const spy = jest.spyOn(tone, "Synth");

    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
