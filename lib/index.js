var express = require('express');  
var app = express();
var path = require('path')


//Static resources server

app.use(express.static(path.resolve(__dirname, '../public')));

var server = app.listen(8080, function () {  
    var port = server.address().port;
    console.log('Server running at port %s', port);
    
});

