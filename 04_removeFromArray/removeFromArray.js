const removeFromArray = function(arr, ...numbers) {
    let index = 0;
    for (let num of numbers){
        arr = arr.filter( number => number !== num);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
