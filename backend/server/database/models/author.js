var mongoose = require('mongoose');

var authorSchema = mongoose.schema({
  name: String,
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
  portrait: String,
  info: String,
  wikiLink: { type: Schema.Types.ObjectId, match: [/(https?:\/\/)?(www\.)?(.*)/g] }
});

module.exports.shema = mongoose.model('Author', authorSchema);
