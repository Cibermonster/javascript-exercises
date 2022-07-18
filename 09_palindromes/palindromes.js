const palindromes = function (str) {
    const before = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var newString = "";
    for (var i = before.length - 1; i >= 0; i--) {
        newString += before[i];
    }
    if (before == newString) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
