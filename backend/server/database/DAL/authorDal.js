
const db = require('./mongooseObj').db;

const Author = require('../models/author');

function getAll() {
  return Author.find({}).exec()
  .then(authors => authors).catch(err => err);
}

function getById(request) {
  return Author.findById(request.id).exec()
  .then(author => author).catch(err => err);
}

function getByName(request) {
  return Author.findOne({ name: request.name }).exec()
  .then(author => author).catch(err => err);
}

function insert(request) {
  const author = new Author({
    name: request.name,
    books: request.books,
    portrait: request.portrait,
    info: request.info,
    wikiLink: request.wikiLink,
  });

  return author.save((err) => {
    if (err) {
      return err;
    }
  });
}

function update(request) {
  return Author.findById(request._id).exec()
  .then((author) => {
    author.name = request.name;
    author.books = request.books;
    author.portrait = request.portrait;
    author.info = request.info;
    author.wikiLink = request.wikiLink;

    return author.save();
  }).catch(err => err);
}

function deleteOne(request) {
  return Author.findByIdAndRemove(request._id).exec()
  .catch(err => err);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getByName = getByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
