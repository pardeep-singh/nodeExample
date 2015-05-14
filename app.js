var express = require('express');

// Constants
var DEFAULT_PORT = 8081;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello New World\n');
});

app.get('/pardeep', function (req, res) {
  res.send('Hello pardeep');
});

app.get('/manish', function (req, res) {
  res.send('Hello manish');
});
app.get('/etc', function (req, res) {
  res.send('Hello etc');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
