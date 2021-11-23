const longestWord = (sen) => {
  // returns array of words from sentence without punctuation
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // sort words from longest to shortest
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // if multiple words put into arr
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );
  // check if more than one value
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
};

module.exports = longestWord;
