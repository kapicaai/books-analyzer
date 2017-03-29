'use strict';
const express = require('express');
const router = express.Router();
const db = require('../../database/DAL/bookDal');
const CRUD = require('./common.js')(db);

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', CRUD.insert);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);

module.exports = router;
