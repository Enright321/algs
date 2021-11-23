// Solution 1
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// Solution 2
// const reverseString = (str) => {
//   let revString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// };

// Solution 3
// const reverseString = (str) => {
//   let revString = '';
//   for (let i = 0; i < str.length; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;
// };

module.exports = reverseString;
