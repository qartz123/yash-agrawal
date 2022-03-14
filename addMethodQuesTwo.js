exports.addMethod2 = function(inputString) {
    var numberArray = inputString.split(',');
    result = 0;
    numberArray.forEach(value => {
        result = result + parseInt(value);
    });
    return result;
}
exports.addMethod3 = function(inputStr) {
    var numberArr = inputStr.split(',');
    var result = 0;
    numberArr.forEach(value => {
        if(value.length != 1) {
            var strArrSplitByNewLine = value.replace(/\n/g, ',').split(',');
            strArrSplitByNewLine.forEach(val => {
                result = result + parseInt(val);
            })
        } else {
            result = result + parseInt(value);
        }
    })
    return result;
}
exports.addMethod5 = function(inputStr) {
    var numberArray = inputStr.split(',');
    var result = negativeValueCount = 0;
    var negativeValArr = [];
    numberArray.forEach(value => {
        if(parseInt(value) < 0) {
            negativeValArr[negativeValueCount] = value;
            negativeValueCount++;
        } else {
            result = result + parseInt(value);
        }
    });
    if(negativeValArr) {
        return "Negatives are Not allowed. Entered negative values are -> " + negativeValArr.join(',');
    } else {
        return "Result is : " + result;
    }
}