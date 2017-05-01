

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

function saveFile(req, res) {
  const textStorage = FileStorage(textPath);
  try {
    const id = textStorage.addFile(req.body.text);
    req.body.text = id;
  } catch (err) {
    res.code = 500;
    res.end();
  }
}

function saveImage(req, res) {
  const imgStorage = FileStorage(imgPath);
  try {
    const id = imgStorage.addFile(req.body.image);
    req.body.image = id;
  } catch (err) {
    res.code = 500;
    res.end();
  }
}

router.get('/simplified', CRUD.getAllSimplified);

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', analyze, saveFile, saveImage, CRUD.insert);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);

module.exports = router;
