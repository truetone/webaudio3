const UI = require("../src/ui");
const tone = require("../src/tone");

describe("Triggering a tone", () => {
  test("Clicking a button that matches the selector for UI should trigger a call to Tone", () => {
    const ui = new UI("test-button");
    document.body.innerHTML = "<!DOCTYPE html><button id=\"test-button\">Test Button</button>";
    const button = document.getElementById("test-button");
    button.click();

    const spy = jest.spyOn(tone, "play");
    expect(spy).toHaveBeenCalled();
  });
});
