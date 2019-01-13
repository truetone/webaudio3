const path = require("path");

module.exports = {
  entry: "./app/src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "app/dist")
  },
  mode: "development"
};
