
exports.addString = function (inputString) {
    if(inputString == '') {
        return 0;
    } else {
        var inputArray = inputString.split(',');
            var result = 0;
            inputArray.forEach(element => {
                result = result + parseInt(element);
            });
            return result;
    }
}