exports.addMethod2 = function(inputString) {
    var numberArray = inputString.split(',');
    result = 0;
    numberArray.each(value => {
        result = result + parseInt(value);
    });
    return result;
}