'use strict';
const express = require('express');
const router = express.Router();


router.get('/', author_controller);

function author_controller(req, res) {
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
}

module.exports = router;
