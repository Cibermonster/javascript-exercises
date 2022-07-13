

const removeFromArray = function() {
    console.table(arguments)
    var arr = arguments[0]
    var remarr = arguments
    const len = arguments.length
    console.log("Before: "+arr)
    console.log("Test: "+remarr)
    console.log("toRemove: "+len)
    
    for (i = 1; i <= len-1; i++) {  
        console.log("REMOVE!: "+i)
        arr.splice(arr.indexOf(arguments[i]), 1)
    }

    console.log("After: "+arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
