

const express = require('express');
const db = require('../../database/DAL/bookDal');
const CRUD = require('./common.js')(db);
const analyzer = require('../../domain/analyzer');
const FileStorage = require('../../database/file_storage/fileStorage');

const router = express.Router();
const textPath = '/data';
const imgPath = '/public/images/books';

function analyze(req, res) {
  req.body.analysis = analyzer(req.body.text);
}

router.get('/simplified', CRUD.getAllSimplified);

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', analyze, saveFile, saveImage, CRUD.insert);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);

module.exports = router;
