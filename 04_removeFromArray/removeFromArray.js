

const removeFromArray = function() {
    console.table(arguments)
    var arr = arguments[0]
    var remarr = arguments
    const len = arguments.length
    console.log("Before: "+arr)
    console.log("Test: "+remarr)
    console.log("toRemove: "+len)
    
    for (i = 1; i <= len-1; i++) {  
        if (arr.indexOf(arguments[i]) > 0){
            arr.splice(arr.indexOf(arguments[i]), 1)
        }
        //console.log("REMOVE!: "+arr.indexOf(arguments[i]))
        
    }

    console.log("After: "+arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
