const leapYears = function(y) {
    var x = y / 4
    var x2 = y / 100
    var x3 = y / 400
    var chkA = x - Math.floor(x)
    var chkB = x2 - Math.floor(x2)
    var chkC = x3 - Math.floor(x3)
    if (chkA !== 0) {
        return false
    }
    if (chkB == 0 && chkC !== 0) {
        return false
    }
    return true

};

// Do not edit below this line
module.exports = leapYears;
