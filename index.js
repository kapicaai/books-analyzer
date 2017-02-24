var http = require('http');

var server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("SOme text");
});

server.listen(8080, '127.0.0.1', () =>{
    console.log("i'm a fool");
})