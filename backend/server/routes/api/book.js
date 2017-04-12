'use strict';
const express = require('express');
const router = express.Router();
const db = require('../../database/DAL/bookDal');
const CRUD = require('./common.js')(db);
const analyzer = require('../../domain/analyzer');

function post(req, res) {
  req.body.analysis = analyzer(req.body.text);
  CRUD.insert(req, res);
}

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', post);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);

module.exports = router;
