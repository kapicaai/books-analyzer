
const express = require('express');
const db = require('../../database/DAL/authorDal');
const CRUD = require('./common.js')(db);

const router = express.Router();

router.get('/simplified', CRUD.getAllSimplified);

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', CRUD.insert);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);


module.exports = router;
