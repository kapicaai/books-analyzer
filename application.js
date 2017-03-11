
const http = require('http');
const route = require('./server/routing/Router');
const routeTable = require('./server/routing/RoutingTable');

var routingTable = routeTable.routingTable;
var router = new route.Router(routingTable);

const port = 8080;
const address = "127.0.0.1";


var server = http.createServer((request, response) => {
  router.route(request, response);
  console.log(`${request.method} ${request.url} HTTP ${request.httpVersion} ${response.statusCode}`);
});

server.listen(port, address, () =>{
    console.log(`Listen at ${address}:${port}`);
});
