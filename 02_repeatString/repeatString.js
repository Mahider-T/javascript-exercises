const repeatString = function(string, num) {
    let finalResult = "";
    let length = 1;
    if (num < 0) {
        return  "ERROR";
    }

    while (length <= num) {
        finalResult += string;
        length++;
    }
    return finalResult;

};



// Do not edit below this line
module.exports = repeatString;
