var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

db.once('open', function(){
  console.log('connected to db');
});
db.on('error', function(){
  console.log('db error');
});

module.exports.db = db;
