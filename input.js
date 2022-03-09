var calculator = require('./add');
 
var BlankString = "";
 
console.log("Addition : "+ calculator.addString(BlankString));
var oneNumberString = "1";
console.log("Addition : "+ calculator.addString(oneNumberString));
var twoNumberString = "1,3";
console.log("Addition : "+ calculator.addString(twoNumberString));
var invalidString = "1,3,4,5,6.6,5.4,3.";
console.log("Addition : "+ calculator.addString(invalidString));
