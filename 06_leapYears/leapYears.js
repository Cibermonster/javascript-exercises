const leapYears = function(y) {
    var x = y / 4
    var x2 = x - Math.floor(x)
    var endswithzero = y % 10
    if (x2 !== 0 || endswithzero == 0) {
        return false
    } 
    return true

};

// Do not edit below this line
module.exports = leapYears;
