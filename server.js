var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/', 'index.html');
})

app.post('/form_post', urlencodedParser, function(req, res) {
    var numString = req.body.numberstring;
    if(numString == undefined || numString == '') {
        res.send("Result is : 0.");
    } else {
        var numStringArr = numString.split(',');
        var result = 0;
        numStringArr.forEach(value => (
            result = result + parseInt(value)
        ));
        res.send("Result is : " + result);
    }
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port 

    console.log("Example app listening at http://%s:%s", host, port);
})