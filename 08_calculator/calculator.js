const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  var sum = 0
  arr.forEach(x => sum += x);
	return sum;
};

const multiply = function(arr) {
  var mult = 1
  arr.forEach(x => mult *= x);
	return mult;
};

const power = function(x,y) {
  var pw = x**y
	return pw;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
