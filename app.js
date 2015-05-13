var express = require('express');
var fs      = require('fs');
 var app = express();

app.get('/',function(request,response){
	response.end("hey");
})

var port = 9002
var ip_address = '127.0.0.1'
app.listen(port, ip_address, function () {
  console.log( "Listening on " + ip_address + ", port " + port )
});