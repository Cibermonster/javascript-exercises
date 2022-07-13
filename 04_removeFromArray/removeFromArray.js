

const removeFromArray = function() {
    var arr = arguments[0]
    var remarr = arguments
    const len = arguments.length
    
    for (i = 0; i <= len+1; i++) {
        if (arr.indexOf(arguments[i]) != '-1') {
            arr.splice(arr.indexOf(arguments[i]), 1)
        }
    }

    console.log("After: "+arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
