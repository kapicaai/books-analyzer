
const express = require('express');
const db = require('../../database/DAL/bookDal');
const CRUD = require('./common.js')(db);
const analyzer = require('../../domain/analyzer');
const FileStorage = require('../../database/file_storage/fileStorage');

const router = express.Router();
const textPath = '/home/yrox/gits/books-analyzer/backend/data';
const imgPath = '/home/yrox/gits/books-analyzer/backend/public/images/books';

function analyze(req, res) {
  req.body.analysis = analyzer(req.body.text);
}

function saveFile(req, res) {
  const textStorage = new FileStorage(textPath);
  try {
    const id = textStorage.addFile(req.body.text);
    req.body.text = id;
  } catch (err) {
    res.code = 500;
    res.end();
  }
}

function saveImage(req, res) {
  const imgStorage = new FileStorage(imgPath);
  try {
    const id = imgStorage.addFile(req.body.image);
    req.body.image = id;
  } catch (err) {
    res.code = 500;
    res.end();
  }
}

function insert(req, res){
  analyze(req, res);
  saveImage(req, res);
  saveFile(req, res);
  saveImage(req, res);

  CRUD.insert(req, res);
}


router.get('/simplified', CRUD.getAllSimplified);

router.get('/', CRUD.getAll);

router.get('/:id', CRUD.getById);

router.post('/', insert);

router.put('/', CRUD.update);

router.delete('/:id', CRUD.deleteOne);

module.exports = router;
