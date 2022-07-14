const ftoc = function(f) {
  var result = (f - 32) * (5/9)
  return parseFloat(result.toPrecision(3))
};

const ctof = function(c) {
  var result = c * (9/5) + 32
  return parseFloat(result.toPrecision(3))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
