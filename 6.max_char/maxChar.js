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

// Solution 2
const maxChar = (str) => {
  const sortedStr = str.split('').sort();
  const maxChar = { char: '', count: 0 };
  const currentChar = { char: '', count: 0 };
  sortedStr.forEach((char) => {
    if (currentChar.char === char) {
      currentChar.count++;
    } else {
      if (maxChar.count < currentChar.count) {
        maxChar.char = currentChar.char;
        maxChar.count = currentChar.count;
      }
      currentChar.char = char;
      currentChar.count = 0;
    }
  });
  return maxChar.char;
};

// console.log(maxChar('javascript'));

module.exports = maxChar;
