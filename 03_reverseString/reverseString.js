const reverseString = function(string) {
    let array = string.split('');
    array.reverse();
    let stringReverse = array.join('');
    return stringReverse;
    
};

// Do not edit below this line
module.exports = reverseString;
