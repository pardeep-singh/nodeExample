var express = require('express');
var fs      = require('fs');
 var app = express();

app.get('/',function(request,response){
	response.end("hey");
})

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.listen(port, ip_address, function () {
  console.log( "Listening on " + ip_address + ", port " + port )
});