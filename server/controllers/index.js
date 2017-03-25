

function index_controller(req, res) {
     res.statusCode = 200;
     res.setHeader('Content-Type', "text/html");
     res.end('<html>' +
     '<head><title>Index</title>' +
     '<link rel=\'stylesheet\' type=\'text/css\' href=\'../../public/stylesheets/main.css\'></head>' +
     '<body><h1>Hello world</h1></body></html>');
 }

 module.exports.controller = index_controller;
