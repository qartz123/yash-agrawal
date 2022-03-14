var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var addMethodQuesTwo = require('./addMethodQuesTwo');
var urlEncoder = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})
app.post('/form_post', urlEncoder, function(req, res){
    var inputString = req.body.numberstring;
    if(inputString == undefined || inputString == '') {
        res.send("Result is : 0.");
    } else {
        var result = addMethodQuesTwo.addMethod3(inputString);
        res.send("Result is : " + result);
    }
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at : http://localhost/" + port);
})
