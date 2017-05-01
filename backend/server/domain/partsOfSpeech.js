const WordPOS = require('wordpos');
const parser = require('./parser');

const POS = new WordPOS();

let verbs;
let nouns;
let adjectives;
let adverbs;

function countVerbs(text) {
  POS.getVerbs(text, (result) => {
    verbs = result.length;
  });
}

function countNouns(text) {
  POS.getNouns(text, (result) => {
    nouns = result.length;
  });
}

function countAdjectives(text) {
  POS.getAdjectives(text, (result) => {
    adjectives = result.length;
  });
}

function countAdverbs(text) {
  POS.getAdverbs(text, (result) => {
    adverbs = result.length;
  });
}

function partsOfSpeech(text) {
  countVerbs(text);
  countNouns(text);
  countAdjectives(text);
  countAdverbs(text);
  return {
    verbs, nouns, adjectives, adverbs,
  };
}

module.exports = partsOfSpeech;
