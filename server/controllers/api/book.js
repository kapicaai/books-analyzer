function book_controller(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
            id: 1,
            name: "Ἰλιάς",
            authorId: 1,
            description: "So cool",
            image: "Nope",
            genre: "Nope",
            text: "he he he, still nope",
            year: "VIII century bc",
            stats: {
                stat1: 100,
                stat2: 404,
                stat4: "This is just your statistic. Trust me."
            }
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

module.exports.controller = book_controller;
