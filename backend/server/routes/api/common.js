'use strict';
  function CRUD(db){
  return {
    getAll(req, res) {
        if ("GET" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            res.end(JSON.stringify(
              db.getAll()
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
            res.end(JSON.stringify(
              db.getById(req.params)
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
            res.end(JSON.stringify(
              db.insert(req.body)
            ));
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
            res.end(JSON.stringify(
              db.update(req.body)
            ));
        } else {
            res.statusCode = 400;
            res.end();
        }
    },

      deleteOne(req, res) {
        if ("DELETE" === req.method) {
            res.statusCode = 200;
            res.setHeader('Content-Type', "application/json");
            res.end(JSON.stringify(
              db.deleteOne(req.params)
            ));
        } else {
            res.statusCode = 400;
            res.end();
        }
    }
  }
}


module.exports = CRUD;
