
exports.addString = function (inputString) {
    if(inputString == '') {
        return 0;
    } else {
        var inputArray = inputString.split(',');
        if(inputArray.length == 1) {
            return inputArray[0];
        } else if(inputArray.length == 2) {
            return parseInt(inputArray[0]) + parseInt(inputArray[1]);
        } else {
            return "Not a valid String.";
        }
    }
}