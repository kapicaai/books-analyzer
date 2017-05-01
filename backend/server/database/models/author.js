const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  portrait: String,
  info: String,
  wikiLink: { type: String, match: [/(https?:\/\/)?(www\.)?(.*)/g] },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
