var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: String,
  author: [{type: Schema.Types.ObjectId, ref: 'Author'}],
  analysis: [{type: Schema.Types.ObjectId, ref: 'Analysis'}],
  description: String,
  image: String,
  genre: [String],
  text: String, //Path to some content storage
  year: String
});

var  Book = mongoose.model('Book', bookSchema);
module.exports = Book;
