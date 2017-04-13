var WordPOS = require('wordpos');
var parser = require('./parser');
var POS = new WordPOS();

var verbs;
var nouns;
var adjectives;
var adverbs;

function countVerbs(text) {
  POS.getVerbs(text, function (result) {
    verbs = result.length;
  });
}

function countNouns(text) {
  POS.getNouns(text, function (result) {
    nouns = result.length;
  });
}

function countAdjectives(text) {
  POS.getAdjectives(text, function (result) {
    adjectives = result.length;
  });
}

function countAdverbs(text) {
  POS.getAdverbs(text, function (result) {
    adverbs = result.length;
  });
}

function partsOfSpeech(text) {
  countVerbs(text);
  countNouns(text);
  countAdjectives(text);
  countAdverbs(text);
  return {
    verbs, nouns, adjectives, adverbs
  }
}

module.exports = partsOfSpeech;
