const db = require('./mongooseObj').db;

const Book = require('../models/book');

function getAll() {
  return Book.find({}).exec()
  .then(books => books).catch(err => err);
}

function getAllSimplified() {
  return Book.find({}).select('name author year image').exec()
  .then(books => books).catch(err => err);
}

function getById(request) {
  return Book.findById(request.id).exec()
  .then(book => book).catch(err => err);
}

function getByName(request) {
  return Book.findOne({ name: request.name }).exec()
  .then(book => book).catch(err => err);
}

function insert(request) {
  const book = new Book({
    name: request.name,
    author: request.author,
    analysis: request.analysis,
    description: request.description,
    image: request.image,
    genre: request.genre,
    text: request.text,
    year: request.year,
  });

  return book.save((err) => {
    if (err) {
      return err;
    }
  });
}

function update(request) {
  return Book.findById(request._id).exec()
  .then((book) => {
    book.name = request.name;
    book.author = request.author;
    book.description = request.description;
    book.image = request.image;
    book.genre = request.genre;
    book.text = request.text;
    book.year = request.year;

    return user.save();
  }).catch(err => err);
}

function deleteOne(request) {
  return Book.findByIdAndRemove(request._id).exec()
  .catch(err => err);
}

module.exports.getAll = getAll;
module.exports.getAllSimplified = getAllSimplified;
module.exports.getById = getById;
module.exports.getByName = getByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
