

function error404_controller(req, res) {
      res.statusCode = 404;
      res.end();
}

module.exports.controller = error404_controller;
