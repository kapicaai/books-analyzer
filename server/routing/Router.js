/*jshint esversion:6*/
const http = require('http');

function Router(table) {
  var routeTable = table;

  this.route = function(request, response){
    for (let url in routeTable) {
      let res = routeTable[url].urlPattern.exec(request.url);
      if (res) {
        let params = res.slice(1);
        routeTable[url].controller(request, response, ...params);
        break;
      }
    }
  };
}


module.exports.Router = Router;
