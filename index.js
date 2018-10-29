const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function (rep, res) {
    res.render('index');
});
app.listen(port, function(){
    console.log("Server listening on port " + port);
});
