//TODO ref to books
//TODO ref to authors
var db = require('./mongooseObj').db;

var User = require("../models/user");

function getAll(){
  User.find({}).exec()
  .then(function(users){
    logGet(users);
    return users;
  }).catch(function(err){
    return err;
  });
}

function getById(request) {
  User.findById(request.userId).exec()
  .then(function(user){
    return user;
  }).catch(function(err){
    return err;
  });
}

function getByName(request) {
  User.findOne({'name': request.name}).exec()
  .then(function(user){
    return user;
  }).catch(function(err){
    return err;
  });
}

function insert(request){
  var user = new User({
    name: request.name,
    passwordCache: request.passwordCache,
    email: request.email,
  });

  user.save(function(err) {
     if (err) {
       return err;
     }
   });

}

function update(request){
  User.findById(request.userId).exec()
  .then(function(user){
    user.name = request.name;
    user.passwordCache = request.passwordCache,
    user.demail = request.email,
    user.books = request.books;
    user.authors = request.authors;

    return user.save();
  }).catch(function(err){
    return err;
  });
}

function deleteOne(request){
  User.findByIdAndRemove(request.userId).exec()
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
