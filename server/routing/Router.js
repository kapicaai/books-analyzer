
const http = require('http');

function Router(table) {
  var routeTable = table;

  this.route = function(request, response){
    var routePath = routeTable.find(
      ({urlPattern}) => urlPattern.test(request.url));

    if (routePath) {
      let params = routePath.urlPattern
        .exec(request.url)
        .slice(1);
      routePath.controller(request, response, ...params);
      }
    };
}


module.exports.Router = Router;
