//TODO extract mongoose and db stuff to separate file
//TODO ref to books
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Author = require("../models/author");

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

function getAll(){
  Author.find({}).exec()
  .then(function(authors){
    logGet(authors);
    return authors;
  }).catch(function(err){
    return err;
  });
}

function getById(request) {
  Author.findById(request.authorId).exec()
  .then(function(author){
    return author;
  }).catch(function(err){
    return err;
  });
}

function getByName(request) {
  Author.findOne({'name': request.name}).exec()
  .then(function(author){
    return author;
  }).catch(function(err){
    return err;
  });
}

function insert(request){
  var author = new Author({
    author.name = request.name;
    author.books = request.books,
    author.portrait = request.portrait,
    author.info = request.info;
    author.wikiLink = request.wikiLink;
  });

  author.save(function(err) {
     if (err) {
       return err;
     }
   });

}

function update(request){
  Author.findById(request.authorId).exec()
  .then(function(author){
    author.name = request.name;
    author.books = request.books,
    author.portrait = request.portrait,
    author.info = request.info;
    author.wikiLink = request.wikiLink;
  }

    return author.save();
  }).catch(function(err){
    return err;
  });
}

function deleteOne(request){
  Author.findByIdAndRemove(request.authorId).exec()
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
