var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
  name: String,
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
  portrait: String,
  info: String,
  wikiLink: { type: String, match: [/(https?:\/\/)?(www\.)?(.*)/g] }
});

var Author  = mongoose.model('Author', authorSchema);
module.exports = Author;
