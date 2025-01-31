const convertToCelsius = function(x) {
  let result = ((x - 32) * 5 / 9);
  let celsius = Math.round(result * 10) /10;
  return celsius;
};

const convertToFahrenheit = function(x) {
  let result = ((x * 9 / 5) + 32);
  let fahrenheit = Math.round(result * 10) /10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
