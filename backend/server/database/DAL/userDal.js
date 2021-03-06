var db = require('./mongooseObj').db;

var User = require("../models/user");

function getAll(){
  return User.find({}).exec()
  .then(function(users){
    logGet(users);
    return users;
  }).catch(function(err){
    return err;
  });
}

function getById(request) {
  return User.findById(request.id).exec()
  .then(function(user){
    return user;
  }).catch(function(err){
    return err;
  });
}

function getByName(request) {
  return User.findOne({'name': request.name}).exec()
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

  return user.save(function(err) {
     if (err) {
       return err;
     }
   });

}

function update(request){
  return User.findById(request._id).exec()
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
  return User.findByIdAndRemove(request._id).exec()
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
