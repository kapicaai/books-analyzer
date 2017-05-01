const splitter = require('sentence-splitter');
const tm = require('text-miner');

let normalizedCorpus;
let sentences;

function getNormalizedCorpus(text, stopWords) {
  const corpus = tm.Corpus(text);
  corpus.toLower().removeDigits().removeInterpunctuation().removeNewlines();
  corpus.removeWords(tm.STOPWORDS.EN);
  return corpus;
}

function getSentences(text) {
  const allTokens = splitter.split(text);
  const result = allTokens.filter(token => token.type === splitter.Syntax.Sentence);
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
      const arr = tm.Terms(normalizedCorpus).dtm[0];
      const result = arr.reduce((sum, current) => sum + current, 0);
      return result;
    },

    getVocabulary() {
      const terms = tm.Terms(normalizedCorpus);
      const result = [];
      for (let i = 0; i < terms.vocabulary.length; i++) {
        result.push({ word: terms.vocabulary[i], count: terms.dtm[0][i] });
      }
      return result;
    },

    getNumberOfSentences() {
      return sentences.length;
    },

// TODO correct word splitting
    getAverageSentLength() {
      let allWords = 0;
      for (let i = 0; i < sentences.length; i++) {
        allWords += sentences[i].value.split(/\s+/).length;
      }
      return allWords / sentences.length;
    },

  };
}

module.exports = PARSER;
