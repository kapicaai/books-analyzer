var mongoose = require('mongoose');

var userSchema = mongoose.schema({
  name: String,
  passwordCache: String,
  email: String,
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
  authors: [{type: Schema.Types.ObjectId, ref: 'Author'}],
});

module.exports.shema = mongoose.model('User', userSchema);
