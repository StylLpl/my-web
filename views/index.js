var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (rep, res) {
    res.send('Hello. Lude');
})

app.listen(port, function(){
    console.log("Hello");
});
