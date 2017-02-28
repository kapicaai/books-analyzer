/*jshint esversion:6*/
const fs = require('fs');
const path = require('path');
const error404_controller =
 require("../controllers/errors/error404");

function static_controller(req, res, file) {
  const baseDir = "public/";
  let filePath = path.join(baseDir, file);
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      res.write(data);
      res.end();
    } else {
      error404_controller.controller(req, res);
    }
  });
}

 module.exports.controller = static_controller;
