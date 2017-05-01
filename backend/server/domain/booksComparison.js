const lsm = require('lsm');

function styleMatching(text1, text2) {
  return lsm.compare(text1, text2);
}
