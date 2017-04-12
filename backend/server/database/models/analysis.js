var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var analysisSchema = new Schema({
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
  books: {type: Schema.Types.ObjectId, ref: 'Book'}
});

var  Analysis = mongoose.model('Analysis', analysisSchema);
module.exports = Analysis;
