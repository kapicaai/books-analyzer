const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  passwordCache: String,
  email: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
