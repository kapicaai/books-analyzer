'use strict';
const express = require('express');
const router = express.Router();
const db = require('../../database/DAL/userDal');

router.get('/', getAll);

function getAll(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.getAll();
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.get('/:id', getById);

function getById(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.getById(req.params);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.get('/:name', getByName);

function getById(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.getByName(req.params);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.get('/:id', getById);

function getById(req, res) {
    if ("GET" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.getById(req.params);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.post('/', insert);

function insert(req, res) {
    if(!req.body) return res.statusCode(400);
    if ("POST" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.insert(req.body);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.put('/', update);

function update(req, res) {
    if(!req.body) return res.statusCode(400);
    if ("PUT" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.update(req.body);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}

router.delete('/:id', deleteOne);

function deleteOne(req, res) {
    if ("DELETE" === req.method) {
        res.statusCode = 200;
        res.setHeader('Content-Type', "application/json");
        res.end(JSON.stringify({
          db.deleteOne(req.params);
        }));
    } else {
        res.statusCode = 400;
        res.end();
    }
}


module.exports = router;
