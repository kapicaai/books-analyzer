/*jshint esversion:6*/
const index_controller = require("../controllers/index");
const static_controller = require("../controllers/static");
const error404_controller =
 require("../controllers/errors/error404");

var routingTable = [
    new Url(new RegExp("/public/(.*)"), static_controller.controller),
    new Url(new RegExp("^/$"), index_controller.controller),
    new Url(new RegExp("^/index$"), index_controller.controller),
    new Url(new RegExp("^.*$"), error404_controller.controller),
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
