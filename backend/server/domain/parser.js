const splitter = require('sentence-splitter');
const tm = require( 'text-miner' );

function getNormalizedCorpus(text){
  var corpus = tm.Corpus(text);
  corpus.toLower().removeDigits().removeInterpunctuation();
  return corpus;
}

function getUniqueWordsList(text){
  var corpus = getNormalizedCorpus(text);
  return tm.Terms(corpus).vocabulary;
}

function countWords(text){
  var corpus = getNormalizedCorpus(text);
  var arr = tm.Terms(corpus).dtm[0];
  var result = arr.reduce(function(sum, current) {
      return sum + current;
    }, 0);
  return result;
}

function getVocabulary(text){
  var corpus = getNormalizedCorpus(text);
  var terms = tm.Terms(corpus);
  var result = [];
  for (var i = 0; i < terms.vocabulary.length; i++) {
    result.push({word: terms.vocabulary[i], count: terms.dtm[0][i]});
  }
  return result;
}

function getSentences(text){
  var allTokens = splitter.split(text);
  var result = allTokens.filter(function(token) {
  return token.type === splitter.Syntax.Sentence;});
  return result;
}

var x = getSentences("here is. is! some\n is some text");
