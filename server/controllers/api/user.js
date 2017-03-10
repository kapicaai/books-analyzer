function user_controller(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
            id: 1,
            name: "Vasya Pupkin",
            passwordCache: "Yea, sure, i gonna send it right to you.",
            email: "Some.stupid.email@on.some.domain",
            books: [1, 1],
            authors: [1],
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

module.exports.controller = user_controller;
