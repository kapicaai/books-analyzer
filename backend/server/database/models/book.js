var mongoose = require('mongoose');

var bookSchema = mongoose.schema({
  name: String,
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  description: String,
  image: String,
  genre: [String],
  text: String, //Path to some content storage
  year: String
});


module.exports.shema = mongoose.model('Book', bookSchema);
