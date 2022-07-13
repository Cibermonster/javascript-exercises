const repeatString = function(string, num) {
    var result = ""
    if (num < 0) {
        return "ERROR"
    }
    for (i = 0; i < num; i++) {
        var result = result.concat(string)
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
