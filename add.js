
exports.addString = function (inputString) {
    if(inputString == '') {
        return 0;
    } else {
        var negativeValueArray = [];
        var negativeValueCount = 0;
        var inputArray = inputString.split(',');
            var result = 0;
            inputArray.forEach(element => {
                if(parseInt(element) < 0) {
                    negativeValueArray[negativeValueCount] = element;
                    negativeValueCount++;
                }
                var inputArraySplitByNewLine = element.replace(/\n/g,'!').split('!');
                if(inputArraySplitByNewLine.length > 1) {
                    console.log(inputArraySplitByNewLine);
                    inputArraySplitByNewLine.forEach(value => {
                        if(parseInt(value) < 0) {
                            negativeValueArray[negativeValueCount] = value;
                            negativeValueCount++;
                        }
                        if(value == '') {
                            return "Not a valid input."
                        } else {
                            result = result + parseInt(value);
                        }
                    });
                } else {
                    result = result + parseInt(element);
                }
            });
            if(negativeValueCount) {
                console.log(negativeValueArray);
                var negativeValueString = '';
                var exceptionString = "Negatives are Not allowed. Entered negatives are - ";
                negativeValueArray.forEach(val => {
                    negativeValueString += negativeValueString;
                });
                return exceptionString + negativeValueString;
            } else {
                return result;
            }
    }
}