

const removeFromArray = function() {
    var arr = arguments[0]
    const len = arr.length
    console.log("Before: "+arr)
    
    /*
    for (i = 0; i < len; i++) {  
        console.log("Count: "+i)
        arr.splice(i, 1)
    }
    console.log("After: "+arr)
    return arr*/
    arr.splice(arr.indexOf(arguments[1]), 1)
    console.log("After: "+arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
