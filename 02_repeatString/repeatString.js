const repeatString = function(string , num) {
    let concatString = '';
    if (num < 0) {
        return "ERROR";
    } else {
        if (string == ''){
            return '';
        }
        else {
            for (let i = 1; i <= num; i++){
                concatString = concatString + string;
            }
            return concatString;
        }
    }
    
};

// Do not edit below this line
module.exports = repeatString;
