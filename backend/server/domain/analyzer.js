const POS = require('./partsOfSpeech');
const parser = require('./parser');
const polarity = require('polarity');

function mostFrequentWords(text) {
  const vocab = parser(text).getVocabulary();
  vocab.sort((a, b) => b.count - a.count);
  return vocab.map(a => a.count).slice(0, 5);
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
  this.mostFrequentWords = mostFrequentWords(text);
  this.sentiments = polarity(parser(text).getUniqueWordsList());
}

function getAnalysis(text) {
  return new Analysis(text);
}

module.exports = getAnalysis;
