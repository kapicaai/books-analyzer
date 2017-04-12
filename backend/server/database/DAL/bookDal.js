var db = require('./mongooseObj').db;

var Book = require("../models/book");

function getAll(){
  return Book.find({}).exec()
  .then(function(books){
    return books;
  }).catch(function(err){
    return err;
  });
}

function getById(request) {
  return Book.findById(request.id).exec()
  .then(function(book){
    return book;
  }).catch(function(err){
    return err;
  });
}

function getByName(request) {
  return Book.findOne({'name': request.name}).exec()
  .then(function(book){
    return book;
  }).catch(function(err){
    return err;
  });
}

function insert(request){
  var book = new Book({
    name: request.name,
    author: request.author,
    description: request.description,
    image: request.image,
    genre: request.genre,
    text: request.text,
    year: request.year
  });

  return book.save(function(err) {
     if (err) {
       return err;
     }
   });
}

function update(request){
  return Book.findById(request._id).exec()
  .then(function (book){
    book.name = request.name;
    book.author = request.author;
    book.description = request.description;
    book.image = request.image;
    book.genre = request.genre;
    book.text = request.text;
    book.year = request.year;

    return user.save();
  }).catch(function (err){
    return err;
  });
}

function deleteOne(request){
  return Book.findByIdAndRemove(request._id).exec()
  .catch(function (err){
    return err;
  });
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getByName = getByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
