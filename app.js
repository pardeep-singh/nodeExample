var express = require('express');
var bodyParser = require('body-parser');
const util = require('util')

// Constants
var DEFAULT_PORT = 4567;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.use(bodyParser.json());


app.get('/', function (req, res) {
    console.log(req.body);
  res.send('Hello New World\n');
});

app.post('/log_event', function (req, res) {
    console.log("Got event in log_event endpoint");
    console.log(util.inspect(req.body, false, null));
    res.send('done');
});

app.post('/create_issue', function (req, res) {
    console.log("Got event in log_event endpoint");
    console.log(util.inspect(req.body, false, null));
    res.send('done');
});


var random_items = function (items){
    return items[Math.floor(Math.random()*items.length)];
}


app.post('/success', function (req, res) {
    console.log("Got event in success endpoint");
    setTimeout(function(){
        console.log("Timeout done in success.");
        res.status(random_items([400, 401, 404])).send("Hello Pardeep");
    }, 1000);
});


app.get('/manish', function (req, res) {
  res.send('Hello manish');
});

app.get('/etc', function (req, res) {
  res.send('Hello etc1');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
