const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  authorName: String,
  authorId: String,
  analysis: { type: {
    partsOfSpeech: { type: {
      verbs: Number,
      nouns: Number,
      adjectives: Number,
      adverbs: Number,
    } },
    averageSentenceLength: Number,
    mostFequentWords: [String],
    sentiments: { type: {
      polarity: Number,
      positivity: Number,
      negativity: Number,
    } },
  } },
  description: String,
  image: String,
  genre: [String],
  text: String, // Path to some content storage
  year: String,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
