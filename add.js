
exports.addString = function (inputString) {
    if(inputString == '') {
        return 0;
    } else {
        var inputArray = inputString.split(',');
            var result = 0;
            inputArray.forEach(element => {
                var inputArraySplitByNewLine = element.replace(/\n/g,'!').split('!');
                if(inputArraySplitByNewLine.length > 1) {
                    inputArraySplitByNewLine.forEach(value => {
                        if(value == '') {
                            return "Not a valid input."
                        } else {
                            result = result + parseInt(value);
                        }
                    });
                    return result;
                } else {
                    result = result + parseInt(element);
                }
            });
            return result;
    }
}