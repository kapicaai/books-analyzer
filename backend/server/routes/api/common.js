'use strict';
  function CRUD(db){
  return {
    getAll(req, res) {
        if ("GET" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            db.getAll()
            .then((books) =>
                res.end(JSON.stringify(books)
            ));
        } else {
            res.statusCode = 400;
            res.end();
        }
    },

    getById(req, res) {
        if ("GET" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            db.getById(req.params)
            .then((books) =>
                res.end(JSON.stringify(books)
            ));
        } else {
            res.statusCode = 400;
            res.end();
        }
    },

      insert(req, res) {
        if(!req.body) return res.statusCode(400);
        if ("POST" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            db.insert(req.body);
            res.end("OK");
        } else {
            res.statusCode = 400;
            res.end();
        }
    },

      update(req, res) {
        if(!req.body) return res.statusCode(400);
        if ("PUT" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            db.update(req.body);
            res.end("OK");
        } else {
            res.statusCode = 400;
            res.end();
        }
    },

      deleteOne(req, res) {
        if ("DELETE" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            db.deleteOne(req.params);
            res.end("OK")
        } else {
            res.statusCode = 400;
            res.end();
        }
    }
  }
}


module.exports = CRUD;
