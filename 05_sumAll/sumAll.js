const sumAll = function(x, y) {
    if (typeof x != 'number' || typeof y != 'number') { return "ERROR" }
    if (x <= 0 || y <= 0) { return "ERROR" }
    
    if (x > y) {
        var newx = y
        var newy = x
        var x = newx
        var y = newy
    }
    
    var sum = x
    for (i = x; x < y; i++) {
        x = x + 1
        sum = sum + x
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
