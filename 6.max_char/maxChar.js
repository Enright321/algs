// Solution 1
// const maxChar = (str) => {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = '';
//   str.split('').forEach((char) => {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };

console.log(maxChar('javvvvascriptttttttt'));

module.exports = maxChar;
