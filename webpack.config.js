const path = require("path");

module.exports = {
  entry: "./app/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app/dist")
  },
  mode: "development",
  devServer: {
    contentBase: "./app/dist"
  }
};
