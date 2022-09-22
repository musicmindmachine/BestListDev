const gradient = require("gradient-string");

const gradientColors = ["#A0A6BE", "#C481B7"];
const gradientErrorColors = ["#ff7b00", "#ffb700", "#ffea00"];

const logStd = (inputString) => {
  // see if this is a string or a template literal first and convert if so
  const logString = typeof inputString === "string" ? inputString.toString() : inputString;

  // generate the gradient
  const coloredLogString = gradient(gradientColors).multiline(logString);

  // ...duh
  console.log(coloredLogString);
};

const logError = (inputString) => {
  // see if this is a string or a template literal first and convert if so
  const logString = typeof inputString === "string" ? inputString.toString() : inputString;

  // generate the gradient
  const coloredLogString = gradient(gradientErrorColors).multiline(logString);

  // ...duh
  console.log(coloredLogString);
};

module.exports = { logStd: logStd, logError: logError };
exports.logStd = logStd;
exports.logError = logError;
