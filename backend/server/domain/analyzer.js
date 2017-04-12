const POS = require('./partsOfSpeech');
const parser = require('./parser');
const polarity = require('polarity');

function mostFrequentWords(text) {
  var vocab = parser(text).getVocabulary();
  vocab.sort(function(a, b) {
    return b.count - a.count
  });
  return vocab.slice(0, 5);
}

function PartsOfSpeechFreq(text) {
  this.verbs = POS(text).verbs;
  this.nouns = POS(text).nouns;
  this.adjectives = POS(text).adjectives;
  this.adverbs = POS(text).adverbs;
}

function Analysis(text) {
  this.partsOfSpeech = new PartsOfSpeechFreq(text);
  this.averageSentenceLength = parser(text).getAverageSentLength();
  this.mostFrequent = mostFrequentWords(text);
  this.sentiments = polarity(parser(text).getUniqueWordsList());
}
