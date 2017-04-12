const splitter = require('sentence-splitter');
const tm = require('text-miner');

var normalizedCorpus;
var sentences;

function getNormalizedCorpus(text, stopWords) {
  var corpus = tm.Corpus(text);
  corpus.toLower().removeDigits().removeInterpunctuation().removeNewlines();
  corpus.removeWords(tm.STOPWORDS.EN)
  return corpus;
}

function getSentences(text) {
  var allTokens = splitter.split(text);
  var result = allTokens.filter(function (token) {
  return token.type === splitter.Syntax.Sentence;
});
  return result;
}

function PARSER(text) {
  normalizedCorpus = getNormalizedCorpus(text);
  sentences = getSentences(text);

  return {
    getUniqueWordsList() {
      return tm.Terms(normalizedCorpus).vocabulary;
    },

    countWords() {
      var arr = tm.Terms(normalizedCorpus).dtm[0];
      var result = arr.reduce(function (sum, current) {
          return sum + current;
        }, 0);
      return result;
    },

    getVocabulary() {
      var terms = tm.Terms(normalizedCorpus);
      var result = [];
      for (var i = 0; i < terms.vocabulary.length; i++) {
        result.push({word: terms.vocabulary[i], count: terms.dtm[0][i]});
      }
      return result;
    },

    getNumberOfSentences() {
      return sentences.length;
    },

//TODO correct word splitting
    getAverageSentLength() {
      var allWords = 0;
      for (let i = 0; i < sentences.length; i++) {
        allWords += sentences[i].value.split(/\s+/).length;
      }
      return allWords / sentences.length;
    }

  }
}

module.exports = PARSER;
