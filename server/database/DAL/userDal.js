//TODO extract mongoose and db stuff to separate file
//TODO ref to books
//TODO ref to authors
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var User = require("../models/user");

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

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
  }

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

db.once('open', function(){
  console.log('connected to db');
});
db.on('error', function(){
  console.log('db error');
});
