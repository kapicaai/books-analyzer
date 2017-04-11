//TODO ref to books
var db = require('./mongooseObj').db;

var Author = require("../models/author");

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
  Author.findById(request.id).exec()
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
    name: request.name,
    books: request.books,
    portrait: request.portrait,
    info: request.info,
    wikiLink: request.wikiLink
  });

  author.save(function(err) {
     if (err) {
       return err;
     }
   });

}

function update(request){
  Author.findById(request._id).exec()
  .then(function(author){
    author.name = request.name;
    author.books = request.books;
    author.portrait = request.portrait;
    author.info = request.info;
    author.wikiLink = request.wikiLink;

    return author.save();
  }).catch(function(err){
    return err;
  });
}

function deleteOne(request){
  Author.findByIdAndRemove(request._id).exec()
  .catch(function(err){
    return err;
  });
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getByName = getByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
