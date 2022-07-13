const sumAll = function(x, y) {
    var sum = x
    for (i = x; i < y; i++) {
        sum = sum + (i+1)
        //console.log("i = "+i)
        //console.log("sum = "+sum)
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
