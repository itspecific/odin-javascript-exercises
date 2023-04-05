const convertToCelsius = function(f) {
  floatnumber = (f - 32) * 5 / 9;

  return Math.round(floatnumber*10)/10;
};

const convertToFahrenheit = function(c) {
  floatnumber = (c * 1.8) + 32;

  return Math.round(floatnumber*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
