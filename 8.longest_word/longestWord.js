// const longestWord = (sen) => {
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   const sorted = wordArr.sort((a, b) => b.length - a.length);
//   const longestWordArr = sorted.filter(
//     (word) => word.length === sorted[0].length
//   );
//   if (longestWordArr.length === 1) {
//     return longestWordArr[0];
//   } else {
//     return longestWordArr;
//   }
// };

console.log(longestWord('Hello there, my name is Joe.'));

module.exports = longestWord;
