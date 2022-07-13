

const removeFromArray = function() {
    console.table(arguments)
    var arr = arguments[0]
    var remarr = arguments
    const len = arguments.length
    console.log("Before: "+arr)
    console.log("toRemove: "+len)
    
    for (i = 0; i <= len+1; i++) {
        if (arr.indexOf(arguments[i]) != '-1') {
            console.log("Removed: "+arguments[i])
            arr.splice(arr.indexOf(arguments[i]), 1)
        }
    }

    console.log("After: "+arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
