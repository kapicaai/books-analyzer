var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: String,
  author: [{type: Schema.Types.ObjectId, ref: 'Author'}],
  analysis: { type: [{
    partsOfSpeech: { type: [{
      verbs: Number,
      nouns: Number,
      adjectives: Number,
      adverbs: Number
    }] },
    averageSentenceLength: Number,
    mostFequentWords: [String],
    sentiments: { type: [{
      polarity: Number,
      positivity: Number,
      negativity: Number
    }] },
  }] },
  description: String,
  image: String,
  genre: [String],
  text: String, //Path to some content storage
  year: String
});

var  Book = mongoose.model('Book', bookSchema);
module.exports = Book;
