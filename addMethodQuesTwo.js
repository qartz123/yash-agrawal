exports.addMethod2 = function(inputString) {
    var numberArray = inputString.split(',');
    result = 0;
    numberArray.forEach(value => {
        result = result + parseInt(value);
    });
    return result;
}