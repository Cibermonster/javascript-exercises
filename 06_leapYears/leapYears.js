const leapYears = function(y) {
    var x = y / 4
    var x2 = x - Math.floor(x)
    if (x2 !== 0) {
        return false
    } 
    return true

};

// Do not edit below this line
module.exports = leapYears;
