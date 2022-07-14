const ftoc = function(f) {
  var result = 0
  result =(f - 32) * (5/9)
  return parseFloat(result.toPrecision(3))
};

const ctof = function(c) {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
