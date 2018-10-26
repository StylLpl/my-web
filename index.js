var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views'. './views');



app.get('/', function (rep, res) {
    res.send('Hello. Lude');
})

app.listen(port, function(){
    console.log("Server listening on port " + port);
});
