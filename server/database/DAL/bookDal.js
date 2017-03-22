//TODO ref to author
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Book = require("../models/book");

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

function getAll(){
  Book.find({}).exec()
  .then(function(books){
    logGet(books);
    return books;
  }).catch(function(err){
    return err;
  });
}

function getById(request) {
  Book.findById(request.bookId).exec()
  .then(function(book){
    return book;
  }).catch(function(err){
    return err;
  });
}

function getByName(request) {
  Book.findOne({'name': request.name}).exec()
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

  book.save(function(err) {
     if (err) {
       return err;
     }
   });
   logInsert();
}

function update(request){
  Book.findById(request.bookId).exec()
  .then(function(book){
    book.name = request.name;
    book.author = request.author;
    book.description = request.description;
    book.image = request.image;
    book.genre = request.genre;
    book.text = request.text;
    book.year = request.year;

    return user.save();
  }).catch(function(err){
    return err;
  });
}

function deleteOne(request){
  Book.findByIdAndRemove(request.bookId).exec()
  .catch(function(err){
    return err;
  });
}

db.once('open', function(){
  console.log('connected to db');
});
db.on('error', function(){
  console.log('db error');
});
