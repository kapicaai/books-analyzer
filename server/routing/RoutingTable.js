const indexController = require("../controllers/index");
const staticController = require("../controllers/static");
const error404Controller = require("../controllers/errors/error404");
const bookApiController = require("../controllers/api/book");
const authorApiController = require("../controllers/api/author");
const userApiController = require("../controllers/api/user");
const router = require("./Router");

var apiRoutingTable = [
    new Url(new RegExp("^/api/book"), bookApiController.controller),
    new Url(new RegExp("^/api/author"), authorApiController.controller),
    new Url(new RegExp("^/api/user"), userApiController.controller),
    new Url(new RegExp("^.*$"), error404Controller.controller),
];

var apiRouter = new router.Router(apiRoutingTable);

var routingTable = [
    new Url(new RegExp("^/public/(.*)"), staticController.controller),
    new Url(new RegExp("^/api/"), apiRouter.route),
    new Url(new RegExp("^/$"), indexController.controller),
    new Url(new RegExp("^/index$"), indexController.controller),
    new Url(new RegExp("^.*$"), error404Controller.controller),
];

function Url(url, controller) {
    this.urlPattern = url;
    this.controller = controller;
}

module.exports.routingTable = routingTable;
