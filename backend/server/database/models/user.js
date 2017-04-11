var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  passwordCache: String,
  email: String,
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
  authors: [{type: Schema.Types.ObjectId, ref: 'Author'}],
});

var User = mongoose.model('User', userSchema);
module.exports = User;
