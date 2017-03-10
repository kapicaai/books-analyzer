function author_controller(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
            id: 1,
            name: "Homer",
            books: [1],
            portrait: "And.... it's gone",
            info: "See it one point down",
            wikiLink: "https://en.wikipedia.org/wiki/Homer"
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

module.exports.controller = author_controller;
