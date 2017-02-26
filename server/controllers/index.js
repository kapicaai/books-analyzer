

function index(req, res) {
     res.statusCode = 200;
     res.setHeader('Content-Type', "text/plain");
     res.end('Hello');
 }

 module.exports.index = index;
