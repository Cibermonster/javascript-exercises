const sumAll = function(x, y) {

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
