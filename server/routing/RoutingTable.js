/*jshint esversion:6*/
const index = require("../controllers/index");

var routingTable = [
    new Url(new RegExp("^/$"), index.index),
    new Url(new RegExp("^/index$"), index.index),
    new Url(new RegExp("^.*$"), (req, res) => {
        res.statusCode = 404;
        res.end();
    })
];

/**
 * Pair of url regexp and controller;
 * @param {stirng}   url                  Url regexp pattern
 * @param {function} Controller function
 */
function Url(url, controller) {
    this.urlPattern = url;
    this.controller = controller;
}

module.exports.routingTable = routingTable;
