var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var addMethodQuesTwo = require('./addMethodQuesTwo');
var urlEncoder = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/form2.html');
})
app.post('/form_submit', urlEncoder, function(req, res){
    var inputString = req.body.numericString;
    if(inputString == undefined || inputString == '') {
        res.send("Result is : 0.");
    } else {
        var stringTestResult = /[^\d.,]/g.test(inputString);
        if(!stringTestResult) {
            var result = addMethodQuesTwo.addMethod2(inputString);
            res.send("Result is : " + result);
        } else {
            res.send("Invalid String. Please enter a valid string having numeric values and comma only.");
        }
    }
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at : http://localhost/" + port);
})
