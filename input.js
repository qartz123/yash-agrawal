var calculator = require('./add');
 
var BlankString = "";
 
console.log("Addition : "+ calculator.addString(BlankString));
var oneNumberString = "1";
console.log("Addition : "+ calculator.addString(oneNumberString));
var twoNumberString = "1,3";
console.log("Addition : "+ calculator.addString(twoNumberString));
var multipleNumbersString = "1,3,4,5,6,5,3";
console.log("Addition : "+ calculator.addString(multipleNumbersString));
var stringWithNewLine = "1\n2,3,4,5,6,5,3,\n";
console.log("Addition : "+ calculator.addString(stringWithNewLine));
var stringWithNewLine = "-1\n2,3,4,-5,6,-5,3,\n";
console.log("Addition : "+ calculator.addString(stringWithNewLine));
